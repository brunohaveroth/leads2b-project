const express = require('express');
const router = express.Router();
const isAuthenticated = require('./middlewares/isAuthenticated');
const { AuthController, EmployeeController, EmployeeSkillController, SkillController } = require('./controllers/loader');

// AuthController
router.post('/signup', AuthController.signup);
router.post('/login', AuthController.login);

// EmployeeController
router.get('/employee', [isAuthenticated], EmployeeController.find);
router.post('/employee', [isAuthenticated], EmployeeController.create);
router.get('/employee/:id', [isAuthenticated], EmployeeController.findOne);
router.put('/employee/:id', [isAuthenticated], EmployeeController.update);
router.delete('/employee/:id', [isAuthenticated], EmployeeController.destroy);

// SkillController
router.get('/skill', [isAuthenticated], SkillController.find);
router.post('/skill', [isAuthenticated], SkillController.create);
router.get('/skill/:id', [isAuthenticated], SkillController.findOne);
router.put('/skill/:id', [isAuthenticated], SkillController.update);
router.delete('/skill/:id', [isAuthenticated], SkillController.destroy);

// EmployeeSkillController
router.get('/employeeSkill', [isAuthenticated], EmployeeSkillController.find);
router.post('/employeeSkill', [isAuthenticated], EmployeeSkillController.create);
router.get('/employeeSkill/:id', [isAuthenticated], EmployeeSkillController.findOne);
router.put('/employeeSkill/:id', [isAuthenticated], EmployeeSkillController.update);
router.delete('/employeeSkill/:id', [isAuthenticated], EmployeeSkillController.destroy);

module.exports = (app) => app.use(router);
