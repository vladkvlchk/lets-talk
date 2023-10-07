const { generateMessageId } = require("../helper/generateMessageId");
const MessageModel = require("../models/message");
const { MessageService } = require("../services");
const UserService = require("../services").default;

const createMessage = async (req, res) => {
  try {
    const { from_user, to_user, chat_id, message_text } = req.body;
    
    const message = await MessageService.createMessage({
      message_text,
      from_user,
      to_user,
      chat_id,
    })
    

    res.json(message);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const getMessagesByContactId = async (req, res) => {
  try {
    const { contact_id, user_id } = req.query;
    const obj = await MessageService.getMessagesByContactId(contact_id, user_id);
    res.json(obj);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { createMessage, getMessagesByContactId };
