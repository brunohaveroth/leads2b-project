const { Employee } = require('../models/loader');

const EmployeeController = {
  async find (req, res) {
    const employees = await Employee.findAll({
      where: { company: req.user.company }
    });
    return res.ok(employees);
  },

  async findOne (req, res) {
    const employee = await Employee.findOne({
      where: {
        id: req.params.id,
        company: req.user.company
      }
    });

    return res.ok(employee);
  },

  async update (req, res) {
    const employee = await Employee.findOne({
      where: {
        id: req.params.id,
        company: req.user.company
      }
    });

    employee.update({
      ...req.body,
      company: req.user.company
    });

    return res.ok(employee);
  },

  async create (req, res) {
    const employee = await Employee.create({
      ...req.body,
      company: req.user.company
    });

    return res.ok(employee);
  },

  async destroy (req, res) {
    try {
      await Employee.destroy({
        where: {
          id: req.params.id,
          company: req.user.company
        }
      });

      return res.noContent();
    } catch(e) {
      return res.badRequest(e);
    }
  }
};

module.exports = EmployeeController;
