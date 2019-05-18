let users = new Object();
users["gatsby"] = { username: "gatsby", password: "12345" };
users["jon_snow"] = { username: "jon_snow", password: "12345" };
users["mesut_ozil"] = { username: "mesut_ozil", password: "12345" };
users["dark_knight"] = { username: "dark_knight", password: "12345" };
users["joker"] = { username: "joker", password: "12345" };
users["thor"] = { username: "thor", password: "12345" };

function getUser(username) {
  if (username in users) return users[username];
  else return null;
}

exports.getUser = getUser;