const ChatModel = require("../models/chat");

class ChatService {
  createChat = async (members, chat_name) => {
    //generating id
    let chat_id = members[0] + "_" + members[1];
    if (members[0] < members[1]) chat_id = members[1] + "_" + members[0];

    const chat = await ChatModel.create({
      id: chat_id,
      chat_name: chat_name || "0",
      members,
    });
    return chat;
  };
}

module.exports = new ChatService();
