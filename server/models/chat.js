const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const ChatModel = sequelize.define("chat", {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  chat_name: {
    type: DataTypes.STRING,
  },
  members: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
});

module.exports = ChatModel;
