const express = require("express");
const cors = require("cors");
const PORT = 5005;

const app = express();

app.use(json());
app.use(cors());

app.get("/hello", (req, res) => {
  res.json({ message: "hello" });
});

app.listen(PORT, () => console.log(`server started on ${PORT}`));