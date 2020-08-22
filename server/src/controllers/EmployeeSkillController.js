const { EmployeeSkill, Skill } = require('../models/loader');

const EmployeeSkillController = {
  async find (req, res) {
    const employeeSkills = await EmployeeSkill.findAll({
      where: {
        ...req.query,
        company: req.user.company
      },
      include: [ { model: Skill } ]
    });
    return res.ok(employeeSkills);
  },

  async findOne (req, res) {
    const employeeSkill = await EmployeeSkill.findOne({
      where: {
        id: req.params.id,
        company: req.user.company
      }
    });

    return res.ok(employeeSkill);
  },

  async update (req, res) {
    const employeeSkill = await EmployeeSkill.findOne({
      where: {
        id: req.params.id,
        company: req.user.company
      }
    });

    employeeSkill.update({
      ...req.body,
      company: req.user.company
    });

    return res.ok(employeeSkill);
  },

  async create (req, res) {
    const created = await EmployeeSkill.create({
      ...req.body,
      company: req.user.company
    });

    const employeeSkills = await EmployeeSkill.findOne({
      where: {
        id: created.id
      },
      include: [ { model: Skill } ]
    });

    return res.ok(employeeSkills);
  },

  async destroy (req, res) {
    try {
      await EmployeeSkill.destroy({
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

module.exports = EmployeeSkillController;
