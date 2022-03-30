const classification = require('./');

let getClassification = () => {
  const result = 12;
  let page = 0;
  classification
    .find()
    .limit(result)
    .skip(result * page)
    .then((result) => {
      console.log(result);
    })
}

getClassification();