const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Developer
          .find(req.query)
          .sort({ date: -1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
    //   findDevs:function(req, res) {
    //       console.log(req);
    //     db.Developer
    //       .find ({_id = req.params.id})
    //       .then(dbModel => res.json(dbModel))
    //       .catch(err => res.status(422).json(err));
    //   }
}