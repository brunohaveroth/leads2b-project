const express = require('express');
const router = express.Router();
const { TestController } = require('./controllers');

router.get('/test/find', TestController.find);

module.exports = (app) => app.use(router);
