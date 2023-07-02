const User = require("../models/user");

const signIn = async (req, res) => {
  try {
    const { id, first_name, last_name, email, profile_photo } = req.body;
    const user = await User.findOne({
      id,
      first_name,
      last_name,
      email,
      profile_photo,
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
      res.json(user);
    } else {
      //user exists
      res.json({ message: "User already exists", user });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Oops, internal Server Error");
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
    res.status(500).send("Oops, internal Server Error");
  }
};

module.exports = { signIn, deleteUserById };
