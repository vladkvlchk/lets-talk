const { MessageService } = require("../services");

class MessageController {
  createMessage = async (req, res) => {
    try {
      const { from_user, to_user, chat_id, message_text } = req.body;

      const message = await MessageService.createMessage({
        message_text,
        from_user,
        to_user,
        chat_id,
      });

      res.json(message);
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  };

  getMessagesByContactId = async (req, res) => {
    try {
      const { contact_id, user_id } = req.query;
      const obj = await MessageService.getMessagesByContactId(
        contact_id,
        user_id
      );
      res.json(obj);
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  };

  getMessagesByChatId = async (req, res) => {
    try {
      const { chat_id } = req.query;
      const obj = await MessageService.getMessagesByChatId(chat_id);
      res.json(obj);
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  };
}

module.exports = new MessageController();
