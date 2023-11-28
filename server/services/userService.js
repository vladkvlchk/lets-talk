const ChatService = require("./chatService");
const UserModel = require("../models/user");

class UserService {
  getUserById = async (id) => {
    console.log('looking for user who has id: ', id);
    const user = await UserModel.findOne({
      where: {
        id
      }
    })
    if (!user) throw new Error("User is not found")

    return user
  }

  getContactByChatId = async (chat_id, user_id) => {
    const { members } = await ChatService.getChatById(chat_id);
    const contact_id = members[0] !== user_id ? members[0] : members[1];
    const contact = await this.getUserById(contact_id);
    return contact;
  };
}

module.exports = new UserService();
