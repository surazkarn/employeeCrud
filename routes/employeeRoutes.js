// routes/employeeRoutes.js
const express = require('express');
const employeeController = require('../controllers/employeeController');

const router = express.Router();

router.post('/create', employeeController.createEmployee);
router.get('/list', employeeController.listEmployees);
router.put('/update/:id', employeeController.updateEmployee);
router.delete('/delete/:id', employeeController.deleteEmployee);
router.get('/get/:id', employeeController.getEmployee);

module.exports = router;
