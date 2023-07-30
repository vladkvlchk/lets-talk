const uuid = require('uuid');
const moment = require('moment');

const generateMessageId = () => {
  const timestamp = moment().unix();
  const randomString = uuid.v4().split('-').join('').substring(0, 6);
  const messageId = `${timestamp}_${randomString}`;
  return messageId;
}

module.exports = generateMessageId
