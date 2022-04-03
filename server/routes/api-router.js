const express = require('express');
const router = express.Router();

const apiController = require('../controller/api-controller.js');

router.get('/', apiController.get, (req, res) => {
  res.status(200).json({hi: 'you'});
});

module.exports = router;