const getGroups = async (req, res) => {
  try {
    return res.json({chats: [
      {
        chat_id: "1",
        logo: "https://avatars.githubusercontent.com/u/81990282?v=4",
        chat_name: "Vladik 1",
        members: ['113287173292628368769', '113287173292628368769'],
      },
      {
        chat_id: "2",
        logo: "https://avatars.githubusercontent.com/u/81990282?v=4",
        chat_name: "Vladik 2",
        members: ['113287173292628368769', '113287173292628368769'],
      },
    ]});
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const createChat = async (req, res) => {
    try{

    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
}

const sendMessage = async (req, res) => {
    try {
      console.log("ok");
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  };

module.exports = { getGroups, sendMessage }