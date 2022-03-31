import React, {useState, useEffect} from 'react';
import Image from './Image.jsx'
import axios from 'axios';

function Images() {
  const [imgList, setImgList] = useState([]);

  const getImages = (page = 0) => {
    axios
      .get('http://localhost:3070/')
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
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {imgList.map(img =>
        (<Image key={img['_id']} image={img} getImages={getImages}/>)
      )}
    </div>
  )
};

export default Images;