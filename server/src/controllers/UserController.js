const { User } = require('../models/loader');

module.exports = {
  async find (req, res) {
    const user = await User.findAll();
    return res.ok(user);
  }
}
