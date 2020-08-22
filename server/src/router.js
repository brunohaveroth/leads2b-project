const express = require('express');
const router = express.Router();
const isAuthenticated = require('./middlewares/isAuthenticated');
const { AuthController, EmployeeController } = require('./controllers/loader');

// AuthController
router.post('/signup', AuthController.signup);
router.post('/login', AuthController.login);

// EmployeeController
router.get('/employee', [isAuthenticated], EmployeeController.find);
router.post('/employee', [isAuthenticated], EmployeeController.create);
router.get('/employee/:id', [isAuthenticated], EmployeeController.findOne);
router.put('/employee/:id', [isAuthenticated], EmployeeController.update);
router.delete('/employee/:id', [isAuthenticated], EmployeeController.destroy);

module.exports = (app) => app.use(router);
