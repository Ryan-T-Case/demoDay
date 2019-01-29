const db = require("../models");

module.exports = {
    getUserName: function (req, res) {
        console.log(req.params.user)
        db.User
        .findOne({userName: req.params.user})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
            // console.log(`getUserName query: ${JSON.parse(query)}`)

    },
}