import React from 'react';
import Moment from 'moment';

function Image({image}) {
  let classification;
  if (image.status) {
    classification = 'Foaming'
  } else if (image.status === false) {
    classification = 'Non-foaming'
  } else {
    classification = 'Unclassified'
  }

  return (
    <div className="col">
      <div className="card">
        <h3 className="card-title">{classification}</h3>
        <p className="card-text"><strong>Last modified: </strong>{Moment(image.lastModified).format('lll')}</p>
        <img src={image.url} alt="camera for foaming experiment"/>
        <form className="card-text">
          <label htmlFor="status">Change Status:</label>
          <select name="status" id="status" required="required" defaultValue={'default'}>
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