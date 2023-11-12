const ChatService = require("./chatService");
const ChatModel = require("../models/chat");
const MessageModel = require("../models/message");
const generateMessageId = require("../helper/generateMessageId");

const getMessagesByContactId = async (contact_id, user_id) => {
  let chat = await ChatModel.findOne({
    where: {
      members: [contact_id, user_id],
    },
  });
  //if chat does not exist, create it
  if (!chat) {
    chat = await ChatModel.findOne({
          where: {
              members: [user_id, contact_id],
        },
    });
    if (!chat) {
        const new_chat = await ChatService.createChat([contact_id, user_id]);
        console.log("new chat:", new_chat);
        return [];
    }
  }
  //if chat exists lets get messages
  const messages = await MessageModel.findAll({
    where: {
      chat_id: chat.id,
    },
  });

  return {chat_id: chat.id, messages};
};

const getMessagesByChatId = async (chat_id) => {
  //if chat exists lets get messages
  const messages = await MessageModel.findAll({
    where: {
      chat_id
    }
  })

  return { chat_id, messages }
}

const createMessage = async (message) => {
  const new_message = await MessageModel.create({
    message_id: generateMessageId(),
    ...message,
  });

  return new_message
};

module.exports = { getMessagesByContactId, createMessage };
