const { Skill } = require('../models/loader');

const SkillController = {
  async find (req, res) {
    const skills = await Skill.findAll({
      where: { company: req.user.company }
    });
    return res.ok(skills);
  },

  async findOne (req, res) {
    const skill = await Skill.findOne({
      where: {
        id: req.params.id,
        company: req.user.company
      }
    });

    return res.ok(skill);
  },

  async update (req, res) {
    const skill = await Skill.findOne({
      where: {
        id: req.params.id,
        company: req.user.company
      }
    });

    skill.update({
      ...req.body,
      company: req.user.company
    });

    return res.ok(skill);
  },

  async create (req, res) {
    const skill = await Skill.create({
      ...req.body,
      company: req.user.company
    });

    return res.ok(skill);
  },

  async destroy (req, res) {
    try {
      await Skill.destroy({
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

module.exports = SkillController;
