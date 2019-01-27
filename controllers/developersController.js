const db = require("../models");

//Methods for the developers controller
module.exports = {
    create: function(req, res) {
        db.Developer
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}