const express = require('express');
const router = express.Router();

const ServerConfig = require('../config/config');

const apiController = require('../controller/api-controller.js');

const config = new ServerConfig()
console.log(config)

router.get('/', apiController.get, (req, res) => {
  res.status(200).json(config);
});

module.exports = router;