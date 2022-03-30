const express = require('express');
const app = express();
const port = process.env.PORT || 3070;
const {getClassification} = require('./database/controllers');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
  getClassification(req, res);
})


app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
});