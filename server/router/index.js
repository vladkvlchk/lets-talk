const { Router } = require("express");
const { UserController, MessageController, ChatController } = require("../controllers");

const router = new Router();

router.post("/sign-in", UserController.signIn);

router.get("/contact/by-chat-id", UserController.getContactByChatId); // {chat_id, user_id}
router.get("/contact/:id", UserController.getContact);
router.get("/contacts/all/:id", UserController.getMyContacts);
router.post("/contact/add", UserController.addContact);
router.post("/contact/delete", UserController.removeContact);
router.delete("/user/delete", UserController.deleteUserById);

router.get("/chats/:id", ChatController.getChatListById);
router.get("/chat/messages/:id", MessageController.getMessagesByChatId);

router.get("/messages/by-contact-id", MessageController.getMessagesByContactId);
router.get("/messages/by-chat-id", MessageController.getMessagesByChatId);
router.post("/message", MessageController.createMessage);

module.exports = router;
