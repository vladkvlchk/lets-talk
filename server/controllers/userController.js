const UserModel = require("../models/user");
const UserContactsModel = require("../models/user_contacts");
const { MessageService, UserService } = require("../services");

class UserController {
  signIn = async (req, res) => {
    try {
      const { id, first_name, last_name, email, profile_photo } = req.body;
      const last_seen = Date.now();
      const user = await UserModel.findOne({
        where: { id },
      });
      if (!user) {
        //new user
        const user = await UserModel.create({
          id,
          first_name,
          last_name,
          email,
          profile_photo,
          last_seen,
        });
        await UserContactsModel.create({
          userId: user.id,
          contactIds: [],
        });
        res.json({ message: "New user", user });
      } else {
        //user exists
        res.json({ message: "User already exists", user });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Oops, Internal Server Error");
    }
  };

  deleteUserById = async (req, res) => {
    try {
      const { id } = req.body;
      const user = await UserModel.destroy({
        where: {
          id,
        },
      });
      if (!user) {
        //there was no user with this id
        res.status(404).send("There was no user with this id");
      } else {
        res.status(200).send("User has been deleted successfully");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Oops, Internal Server Error");
    }
  };

  addContact = async (req, res) => {
    try {
      const { myId, contactEmail } = req.body;
      const me = await UserModel.findOne({
        where: {
          id: myId,
        },
      });
      if (!me) {
        return res.status(400).send("Error! Your data is invalid");
      }
      if (contactEmail === me.email) {
        return res.status(400).send("You cannot add yourself as your contact");
      }

      const new_contact = await UserModel.findOne({
        where: {
          email: contactEmail,
        },
      });
      if (!new_contact) {
        return res.status(400).send("This user hasn't visited this app yet :(");
      }

      const contacts = await UserContactsModel.findOne({
        where: {
          userId: me.id,
        },
      });

      if (!contacts) {
        const contacts = await UserContactsModel.create({
          userId: me.id,
          contactIds: [new_contact.id],
        });
        if (!contacts) {
          return res.status(500).send("Database does't respond");
        }
        return res.json(contacts);
      } else {
        const contacts = await UserContactsModel.findOne({
          where: {
            userId: me.id,
          },
        });
        contacts.contactIds = [...contacts.contactIds, new_contact.id];
        await contacts.save();
        return res.json(contacts);
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Oops, Internal Server Error");
    }
  };

  getMyContacts = async (req, res) => {
    try {
      const { contactIds } = await UserContactsModel.findOne({
        where: {
          userId: req.params.id,
        },
      });
      if (!contactIds) {
        res.status(400).send("You have no contacts");
      }

      let myContactsInfo = await UserModel.findAll({
        where: { id: contactIds },
      });

      return res.json(
        myContactsInfo.map((contact) => ({
          id: contact.id,
          first_name: contact.first_name,
          last_name: contact.last_name,
          profile_photo: contact.profile_photo,
          last_seen: contact.last_seen,
        }))
      );
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  };

  getContact = async (req, res) => {
    try {
      const user = await UserModel.findOne({ where: { id: req.params.id } });
      if (!user) {
        return res.status(404).send("User is not found");
      }

      res.json(user);
    } catch (error) {
      console.log(error);
      res.status(500).send(error.message);
    }
  };

  getContactByChatId = async (req, res) => {
    try {
      const { chat_id, user_id } = req.body;
      const contact = await UserService.getContactByChatId(chat_id, user_id)

      res.json(contact);
    } catch (error) {
      console.log(error);
      res.status(500).send(error.message);
    }
  };

  removeContact = async (req, res) => {
    try {
      const { myId, contactId } = req.body;
      const myContacts = await UserContactsModel.findOne({
        where: {
          userId: myId,
        },
      });

      myContacts.contactIds = myContacts.contactIds.filter(
        (id) => id !== contactId
      );
      myContacts.save();

      if (!(myContacts && myContacts.contactIds)) {
        return res.status(404).send("Not Found");
      }
      return res.status(200).send("User has been deleted successfully");
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  };
}

module.exports = new UserController();
