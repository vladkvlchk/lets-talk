const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Chat = sequelize.define("chat", {
  chat_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  chat_name: {
    type: DataTypes.STRING,
  },
  members: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
});
