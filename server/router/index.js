const { Router } = require("express");
const { UserController, MessageController, ChatController } = require("../controllers");

const router = new Router();

router.get("/hello", (req, res) => {
  res.json({ message: "hello" });
});
router.post("/sign-in", UserController.signIn);

router.get("/contact/:id", UserController.getContact);
router.get("/contacts/all/:id", UserController.getMyContacts);
router.post("/contact/add", UserController.addContact);
router.post("/contact/delete", UserController.removeContact);
router.delete("/user/delete", UserController.deleteUserById);

router.get("/chats/:id", ChatController.getChatsByMemberId);

router.get("/messages", MessageController.getMessagesByContactId);
router.post("/message", MessageController.createMessage);

module.exports = router;
