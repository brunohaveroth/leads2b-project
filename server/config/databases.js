const databases = {
  sqlite: {
    development: {
      dialect: 'sqlite',
      storage: '../database/leads2b.db',
      define: { charset: 'utf8', timestamps: true },
      logging: (msg) => console.log(msg)
    }
  }
};

module.exports = databases;
