const createChat = async (req, res) => {
  try {
    res.json({ message: "soon..." });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
