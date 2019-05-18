const jwt = require("jsonwebtoken");

/*
  @username - username for generating jwt key 
  jwt key is sent back to the user after successful user validation
*/
function generateAuthKey(username) {
  const jwtKey = jwt.sign(
    { username },
    "privateKey" //for simplicity, it should be stored in env variable
  );

  return jwtKey;
}

exports.generateAuthKey = generateAuthKey;
