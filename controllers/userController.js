const db = require("../models");


module.exports = {
    getUserName: function (req, res) {
        // console.log(`findUserName Controller: ${req.query}`);

        db.User
            .findOne({userName: "newuser"})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
            // console.log(`getUserName query: ${query}`)

    },
}