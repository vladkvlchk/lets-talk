const express = require("express");
const cors = require("cors");
const router = require("./router");
const PORT = process.env.PORT || 5000;

const app = express();

const server = require("http").createServer(app);
const { Server } = require("socket.io");
const Message = require("./models/message");
const generateMessageId = require("./helper/generateMessageId");
const { MessageService } = require("./services");
const io = new Server(server);

app.use(express.json());
app.use(cors());

io.on("connection", (socket) => {
  socket.on("CHAT:JOIN", ({ chat_id }) => {
    socket.join(chat_id);
  });

  socket.on(
    "CHAT:NEW_MESSAGE",
    async ({ from_user, to_user, chat_id, message_text }) => {
      try {
        const message = await MessageService.createMessage({
          message_text,
          from_user,
          to_user,
          chat_id,
        });

        socket
        .to(chat_id)
        .emit("CHAT:NEW_MESSAGE", message);
      } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
      }
    }
  );

  socket.on("disconnect", () => {
    console.log("socket " + socket.id + " disconnected");
  });

  console.log("socket connected", socket.id);
});

app.use("/", router);

server.listen(PORT, (error) => {
  if (error) {
    throw Error(error);
  }
  console.log(`server started on ${PORT}`);
});
