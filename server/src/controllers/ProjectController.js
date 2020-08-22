const { Project } = require('../models/loader');

const ProjectController = {
  async find (req, res) {
    const projects = await Project.findAll({
      where: { company: req.user.company }
    });
    return res.ok(projects);
  },

  async findOne (req, res) {
    const project = await Project.findOne({
      where: {
        id: req.params.id,
        company: req.user.company
      }
    });

    return res.ok(project);
  },

  async update (req, res) {
    const project = await Project.findOne({
      where: {
        id: req.params.id,
        company: req.user.company
      }
    });

    project.update({
      ...req.body,
      company: req.user.company
    });

    return res.ok(project);
  },

  async create (req, res) {
    const project = await Project.create({
      ...req.body,
      company: req.user.company
    });

    return res.ok(project);
  },

  async destroy (req, res) {
    try {
      await Project.destroy({
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

module.exports = ProjectController;
