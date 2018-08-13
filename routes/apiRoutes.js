var db = require("../models");

module.exports = function(app) {
  app.get("/api/:Category?", function(req, res) {
    //  get only category
    if (req.params.Category) {
      db.jobs
        .findAll({
          where: {
            Category: req.params.Category
          }
        })
        .then(function(dbjobs) {
          return res.json(dbjobs);
        });
    }
  });
  app.get("/api/:AS_Code?", function(req, res) {
    // get only salary
    if (req.params.AS_Code) {
      db.jobs
        .findAll({
          where: {
            AS_Code: req.params.AS_Code
          }
        })
        .then(function(dbjobs) {
          return res.json(dbjobs);
        });
    }
  });
};
