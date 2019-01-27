const db = require("../models");

module.exports = {

saveNote: (req, res) => {
    db.Users
    .findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
},
getNote: (req, res) => {
    db.Users
    .findOne({ _id: req.params.id }, req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
},
deleteNote: (req, res) => {
    db.Users
    .findById({_id: req.params.id})
    .then(dbModel => dbModel.remove())
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
}



};