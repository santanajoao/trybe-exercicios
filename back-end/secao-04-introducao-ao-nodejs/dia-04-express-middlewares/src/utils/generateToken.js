const crypto = require('crypto');

function generateToken() {
  const BYTES_NUMBER = 8;
  const ENCODING = 'hex';
  return crypto.randomBytes(BYTES_NUMBER).toString(ENCODING);
}

module.exports = generateToken;