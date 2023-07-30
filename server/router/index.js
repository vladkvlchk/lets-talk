const { Router } = require("express");
const { UserController, MessageController } = require("../controllers");

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

router.get("/chats/:id", MessageController.getGroups);

router.post("/message", MessageController.createMessage);

module.exports = router;
