import React from 'react';
import Moment from 'moment';

function Image({image}) {
  return (
    <div>
      <h3>Unclassified</h3>
      <p><strong>Last modified: </strong>{Moment(image.lastModified).format('lll')}</p>
      <img src={image.url} alt="camera for foaming experiment"/>
      <form className="attendee-form">
        <label htmlFor="status">Change Status:</label>
        <select name="status" id="status" required="required">
          <option value="" selected disabled hidden></option>
          <option value="foaming">foaming</option>
          <option value="non-foaming">non-foaming</option>
        </select>
        <button type="submit">Send</button>
      </form>
    </div>

  )
};

export default Image;