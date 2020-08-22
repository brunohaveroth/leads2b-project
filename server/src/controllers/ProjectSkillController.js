const { ProjectSkill, Skill } = require('../models/loader');

const ProjectSkillController = {
  async find (req, res) {
    const projectSkill = await ProjectSkill.findAll({
      where: {
        ...req.query,
        company: req.user.company
      },
      include: [ { model: Skill } ]
    });
    return res.ok(projectSkill);
  },

  async findOne (req, res) {
    const projectSkill = await ProjectSkill.findOne({
      where: {
        id: req.params.id,
        company: req.user.company
      }
    });

    return res.ok(projectSkill);
  },

  async update (req, res) {
    const projectSkill = await ProjectSkill.findOne({
      where: {
        id: req.params.id,
        company: req.user.company
      }
    });

    projectSkill.update({
      ...req.body,
      company: req.user.company
    });

    return res.ok(projectSkill);
  },

  async create (req, res) {
    const created = await ProjectSkill.create({
      ...req.body,
      company: req.user.company
    });

    const projectSkill = await ProjectSkill.findOne({
      where: {
        id: created.id
      },
      include: [ { model: Skill } ]
    });

    return res.ok(projectSkill);
  },

  async destroy (req, res) {
    try {
      await ProjectSkill.destroy({
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

module.exports = ProjectSkillController;
