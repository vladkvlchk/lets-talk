const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const MessageModel = sequelize.define("message", {
  message_id: {
    type: DataTypes.STRING,
    primaryKey: true,
    autoIncrement: true,
  },
  from_user: {
    type: DataTypes.STRING,
  },
  to_user: {
    type: DataTypes.STRING,
  },
  chat_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  message_text: {
    type: DataTypes.STRING,
  }
});

module.exports = MessageModel;