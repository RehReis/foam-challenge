const classification = require('./');

module.exports.getClassification = (req, res) => {
  const result = 12;
  let {page, filter} = req.query;
    classification
    .find({status: filter})
    .limit(result)
    .skip(result * page)
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500)
    })
}

module.exports.changeClassification = (req, res) => {
  let {id, status} = req.body;
  classification
    .findOneAndUpdate({_id: id}, {status: status, lastModified: Date.now()})
    .then(result => {
      res.sendStatus(201);
    })
    .catch(err => {
      res.sendStatus(501);
    })
}
