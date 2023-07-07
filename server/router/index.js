const { Router } = require("express");
const { UserController } = require("../controllers");

const router = new Router();

router.get("/hello", (req, res) => {
  res.json({ message: "hello" });
});
router.post("/sign-in", UserController.signIn);
router.post("/contact/add", UserController.addContact);
router.get("/my-contacts/:id", UserController.getMyContacts);
router.get("/contact/:id", UserController.getContact);
router.post("/contact/delete", UserController.removeContact);
router.delete("/user/delete", UserController.deleteUserById);

module.exports = router;
