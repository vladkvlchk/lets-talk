const express = require("express");
const cors = require("cors");
const { UserController } = require("./controllers");
const PORT = 5000;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/hello", (req, res) => {
  res.json({ message: "hello" });
});
app.post("/sign-in", UserController.signIn);
app.delete("/user/delete", UserController.deleteUserById)

app.listen(PORT, () => console.log(`server started on ${PORT}`));