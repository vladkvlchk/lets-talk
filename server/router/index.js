const { Router } = require("express");
const { UserController } = require("../controllers");

const router = new Router();

router.get("/hello", (req, res) => {
  res.json({ message: "hello" });
});
router.post("/sign-in", UserController.signIn);
router.post("/add-contact", UserController.addContact);
router.get("/my-contacts/:id", UserController.getMyContacts);
router.get("/contact/:id", UserController.getContact);
router.delete("/user/delete", UserController.deleteUserById);

module.exports = router;
