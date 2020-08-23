const { Employee, Project, ParticipantOnProject, sequelize } = require('../models/loader');

const ProjectController = {
  async find (req, res) {
    try {
      const projects = await Project.findAll({
        where: { company: req.user.company }
      });
      return res.ok(projects);
    } catch (e) {
      return res.badRequest(e);
    }
  },

  async findOne (req, res) {
    try {
      const project = await Project.findOne({
        where: {
          id: req.params.id,
          company: req.user.company
        }
      });

      return res.ok(project);
    } catch (e) {
      return res.badRequest(e);
    }
  },

  async update (req, res) {
    try {
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
    } catch (e) {
      return res.badRequest(e);
    }
  },

  async create (req, res) {
    try {
      const project = await Project.create({
        ...req.body,
        company: req.user.company
      });

      return res.ok(project);
    } catch (e) {
      return res.badRequest(e);
    }
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
  },

  async addEmployee (req, res) {
    try {
      let participantOnProject = await ParticipantOnProject.create(req.body);
      return res.ok(participantOnProject);
    } catch(e) {
      return res.badRequest(e);
    }
  },

  async removeEmployee (req, res) {
    try {
      let participantOnProject = await ParticipantOnProject.destroy({
        where: {
          project: req.params.id,
          employee: req.params.employee
        }
      });
      return res.ok(participantOnProject);
    } catch(e) {
      return res.badRequest(e);
    }
  },

  async participants (req, res) {
    try {
      let participants = await ParticipantOnProject.findAll({
        where: {
          project: req.params.id
        },
        include: [ { model: Employee } ]
      });
      return res.ok(participants);
    } catch(e) {
      console.log(e);
      return res.badRequest(e);
    }
  },

  // Retornar os colaboradores mais indicados paa o projeto
  async suggestions (req, res) {
    try {
      let participants = await ParticipantOnProject.findAll({
        where: {
          project: req.params.id
        }
      });

      let ignoreIds = participants.map(o => o.employee);

      // TODO: Refazer usando sequelize ao invés de .query
      const [bests] = await sequelize.query(`
        select employee.id, employee.firstName, employee.lastName, employee.email, SUM(employeeskill.stars) as stars from projectskill
        inner join employeeskill ON employeeskill.skill = projectskill.skill AND employeeskill.stars >= projectskill.stars
        inner join employee ON employee.id = employeeskill.employee
        where projectskill.project = ${req.params.id} and employee.id not in (${ignoreIds}) and employee.company = ${req.user.company}
        group By employee.id
        order by stars DESC;
      `);

      ignoreIds = [...ignoreIds, ...bests.map(o=> o.id) ];

      const [others] = await sequelize.query(`
        select employee.id, employee.firstName, employee.lastName, employee.email, SUM(employeeskill.stars) as stars from projectskill
        inner join employeeskill ON employeeskill.skill = projectskill.skill
        inner join employee ON employee.id = employeeskill.employee
        where projectskill.project = ${req.params.id} AND employee.id not in (${ignoreIds}) and employee.company = ${req.user.company}
        group By employee.id
        order by stars DESC;
      `);

      ignoreIds = [...ignoreIds, ...others.map(o=> o.id) ];

      const [all] = await sequelize.query(`
        select employee.id, employee.firstName, employee.lastName, employee.email from employee
        where employee.id not in (${ignoreIds}) and employee.company = ${req.user.company};
      `);

      return res.ok({ bests, others, all });
    } catch(e) {
      console.log(e);
      return res.badRequest(e);
    }
  }
};

module.exports = ProjectController;
