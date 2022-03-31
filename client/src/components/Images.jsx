import React, {useState, useEffect} from 'react';
import Image from './Image.jsx'
import axios from 'axios';

function Images() {
  const [imgList, setImgList] = useState([]);

  const getImages = (page, filter) => {
    if (filter === 'foaming') {
      filter = true;
    } else if (filter === 'non-foaming') {
      filter = false;
    } else {
      filter = null;
    }

    axios
      .get('http://localhost:3070/', { params: {page, filter} })
      .then(({data}) => {
        setImgList(data);
      })
      .catch(error => {
        console.log(error);
      })
  }

  useEffect(() => {
    getImages(0);
  }, [])


  return (
    <div>
      <label htmlFor="filter">Filter by:</label>
      <select name="filter" id="filter" required="required" onChange={(e) => getImages(0, e.target.value)}>
      <option value="unclassified">unclassified</option>
        <option value="foaming">foaming</option>
        <option value="non-foaming">non-foaming</option>
      </select>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {imgList.map(img =>
        (<Image key={img['_id']} image={img} getImages={getImages}/>)
        )}
      </div>
    </div>
  )
};

export default Images;