const ChatModel = require("../models/chat");
const { Sequelize } = require("sequelize");
const UserModel = require("../models/user");
const MessageModel = require("../models/message");

// const getPreviewForChat

const getChatsByMemberId = async (req, res) => {
  try {
    const memberId = req.params.id;
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
          console.log("------ messages: ", messages);
          previewChat.data.last_message.text = messages.pop().message_text;
          previewChat.data.last_message.time = messages.pop().createdAt;
        }
        else console.log('======== messages not found ========')

        return previewChat;
      })
    );
    return res.json(previewChats);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { getChatsByMemberId };

//113287173292628368769
//103096711349709654754
