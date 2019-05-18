const express = require('express');
const users = require('../mock-data/users');
const auth = require('../utils/auth');
const router = express.Router();

const errorMessage = {
  success: false,
  errorMessage: "Invalid username/password"
};

const response = {
  success: true,
  errorMessage: null,
  jwt: null
};


router.post('/', (req, res) => {
  setTimeout(() => {
    const {username, password} = req.body;

    const user = users.getUser(username);

    if(!user) return res.status(400).send(errorMessage);

    if(password !== user.password) return res.status(400).send(errorMessage);

    const jwt = auth.generateAuthKey(username);
    response.jwt = jwt;

    res.send(response);
  }, 2000);
	
}) 

module.exports = router;