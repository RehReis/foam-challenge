const db = require('mongoose');

db.connect('mongodb://localhost/foamChallenge')
  .catch(error => {
    console.error('Error: ', error);
  })

const classificationSchema = new db.Schema({
  url: {type: String, required: true},
  lastModified: {type: Date, default: Date.now},
  status: {type: Boolean, required: true}
});

const classification = db.model("classification", classificationSchema);

module.exports = classification;

/*
  To seed the database with the JSON file run the following in your terminal:
    mongoimport --jsonArray --db=foamChallenge --collection=classifications --file=database/foam-seed.json
*/
