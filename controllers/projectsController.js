const db = require("../models");

//Methods for the projects controller
module.exports = {
    create: function(req, res) {
        db.Project
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        console.log(req.params.id);
        db.Project
            .findByIdAndUpdate(req.params.id, {$push: {_developers: req.body.id}}, {new: true})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findAll: function(req, res) {
        db.Project
          .find(req.query)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
    findProject: function(req, res) {
        console.log(`findProject Controller: ${req.params.id}`);
        db.Project
        .findById(req.params.id)
        .populate("_developers")
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
}