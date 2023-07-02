const User = require("../models/user");
const UserContacts = require("../models/user_contacts");

const signIn = async (req, res) => {
  try {
    const { id, first_name, last_name, email, profile_photo } = req.body;
    const user = await User.findOne({
      where: { id },
    });
    if (!user) {
      //new user
      const user = await User.create({
        id,
        first_name,
        last_name,
        email,
        profile_photo,
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

const deleteUserById = async (req, res) => {
  try {
    const { id } = req.body;
    const user = await User.destroy({
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

const addContact = async (req, res) => {
  try {
    const { myId, contactEmail } = req.body;
    const me = await User.findOne({
      where: {
        id: myId,
      },
    });
    if (!me) {
      return res.status(400).send("Error! Your data is invalid");
    }
    if (contactEmail === me.email) {
        return res.status(400).send("You cannot add yourself as a new contact");
    }

    const new_contact = await User.findOne({
      where: {
        email: contactEmail,
      },
    });
    if (!new_contact) {
      return res.status(500).send("User hasn't visited this app yet :(");
    }

    const contacts = await UserContacts.findOne({
      where: {
        userId: me.id,
      },
    });
    if (!contacts) {
      const contacts = await UserContacts.create({
        userId: me.id,
        contactIds: [new_contact.id],
      });
      if (!contacts) {
        return res.status(500).send("Database does't require");
      }
      return res.json(contacts);
    } else {
      const contacts = await UserContacts({
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

module.exports = { signIn, deleteUserById, addContact };
