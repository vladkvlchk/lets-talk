const { Sequelize } = require("sequelize");

const ChatModel = require("../models/chat");
const UserModel = require("../models/user");
const MessageModel = require("../models/message");

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

  getChatById = async (id) => {
    const chat = await ChatModel.findOne({
      where: {
        id
      }
    });
    if(!chat) throw new Error('chat was not found');
    return chat;
  }

  getChatListById = async (memberId) => {
    const chats = await ChatModel.findAll({
      where: {
        members: {
          [Sequelize.Op.contains]: [memberId],
        },
      },
    });
    const previewChats = await Promise.all(
      chats.map(async (chat) => {
        const previewChat = {
          chat_id: chat.id,
          type: "dialog",
          data: {
            first_name: "",
            last_name: "",
            profile_photo: null,
            last_message: {
              text: "",
              time: "",
            },
          },
        };
        //looking for data of another member of the chat
        let anotherMemberId = "";
        if (anotherMemberId === memberId) {
          anotherMemberId = chat.members[1];
        } else {
          anotherMemberId = chat.members[0];
        }
        console.log("another member id: ", anotherMemberId);
        const anotherMember = await UserModel.findOne({
          where: { id: anotherMemberId },
        });
        if(!anotherMember) throw new Error("The second chat member was not found")
        //take it in result object
        previewChat.data.first_name = anotherMember.first_name;
        previewChat.data.last_name = anotherMember.last_name;
        previewChat.data.profile_photo = anotherMember.profile_photo;

        //looking for the last message
        const messages = await MessageModel.findAll({
          where: {
            chat_id: chat.id,
          },
        });

        if (messages.length) {
          console.log("------ messages.length: ", messages.length);
          previewChat.data.last_message.text = messages.pop().message_text;
          previewChat.data.last_message.time = messages.pop().createdAt;
        } else {
          console.log("======== messages are not found ========");
        }

        return previewChat;
      })
    );

    return previewChats
  }
}

module.exports = new ChatService();