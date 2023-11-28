const chatService = require("../services/chatService");

class ChatController {
  getChatListById = async (req, res) => {
    try {
      const { id } = req.params;
      const response = await chatService.getChatListById(id);

      return res.json(response);
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  };
}

module.exports = new ChatController();

//113287173292628368769
//103096711349709654754
