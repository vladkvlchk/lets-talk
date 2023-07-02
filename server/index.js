const express = require("express");
const cors = require("cors");
const { UserController } = require("./controllers");
const router = require("./router");
const PORT = 5000;

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', router)

app.listen(PORT, () => console.log(`server started on ${PORT}`));