// controllers/employeeController.js
const { Employee, Contact } = require('../models/employee');

// Create Employee with multiple contact details
const createEmployee = async (req, res) => {
    try {
      const { name, contacts } = req.body;
  
      const employee = await Employee.create({ name });
  
      if (Array.isArray(contacts)) {
        await Promise.all(
          contacts.map((contact) => Contact.create({ ...contact, EmployeeId: employee.id }))
        );
      }
  
      res.status(201).json({ message: 'Employee created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  

// List Employees with pagination
const listEmployees = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;

    const employees = await Employee.findAll({
      offset,
      limit: parseInt(limit),
      include: [{ model: Contact, as: 'contacts' }],
    });

    res.status(200).json({ employees });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Update Employee
const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    await Employee.update({ name }, { where: { id } });

    res.status(200).json({ message: 'Employee updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Delete Employee
const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    await Employee.destroy({ where: { id } });

    res.status(200).json({ message: 'Employee deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get Employee
const getEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    const employee = await Employee.findByPk(id, {
      include: [{ model: Contact, as: 'contacts' }],
    });

    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    res.status(200).json({ employee });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createEmployee,
  listEmployees,
  updateEmployee,
  deleteEmployee,
  getEmployee,
};
