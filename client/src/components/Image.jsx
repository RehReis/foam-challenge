import React, {useState} from 'react';
import Moment from 'moment';
import axios from 'axios';

function Image({image, getImages}) {
  const [newStatus, setNewStatus] = useState('');

  let classification;
  if (image.status) {
    classification = 'Foaming'
  } else if (image.status === false) {
    classification = 'Non-foaming'
  } else {
    classification = 'Unclassified'
  }

  const handleStatusOnChange = (e) => {
    setNewStatus(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let status = newStatus === 'foaming' ? true : false;
    axios
      .put('http://localhost:3070/', { id: image['_id'], status })
      .then(({data}) => {
        getImages();
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <div className="col">
      <div className="card">
        <h3 className="card-title">{classification}</h3>
        <p className="card-text"><strong>Last modified: </strong>{Moment(image.lastModified).format('lll')}</p>
        <img src={image.url} alt="camera for foaming experiment"/>
        <form className="card-text" onSubmit={handleSubmit}>
          <label htmlFor="status">Change Status:</label>
          <select name="status" id="status" required="required" defaultValue='default' onChange={handleStatusOnChange}>
            <option value="default" disabled hidden></option>
            <option value="foaming">foaming</option>
            <option value="non-foaming">non-foaming</option>
          </select>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
};

export default Image;