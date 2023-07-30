const { generateMessageId } = require("../helper/generateMessageId");
const Message = require("../models/message");

const getGroups = async (req, res) => {
  try {
    return res.json({
      chats: [
        {
          chat_id: "1",
          logo: "https://avatars.githubusercontent.com/u/81990282?v=4",
          chat_name: "Vladik 1",
          members: ["113287173292628368769", "113287173292628368769"],
        },
        {
          chat_id: "2",
          logo: "https://avatars.githubusercontent.com/u/81990282?v=4",
          chat_name: "Vladik 2",
          members: ["113287173292628368769", "113287173292628368769"],
        },
      ],
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const createMessage = async (req, res) => {
  try {
    const { from_user, to_user, chat_id, message_text } = req.body;
    const message = await Message.create({
      message_id: generateMessageId(),
      message_text,
      from_user,
      to_user,
      chat_id,
    });

    res.json(message);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const sendMessage = async (req, res) => {
  try {
    console.log("ok");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { getGroups, sendMessage, createMessage };
