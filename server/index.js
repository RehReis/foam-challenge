const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3070;
const {getClassification, changeClassification} = require('../database/controllers');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
  getClassification(req, res);
})

app.put('/', (req, res) => {
  changeClassification(req, res);
})


app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
});