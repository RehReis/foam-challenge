import React, {useState} from 'react';
import Image from './Image.jsx'
import dummyData from '../dummydata.js';

function Images() {
  const [imgList, setImgList] = useState(dummyData);
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {imgList.map(img =>
        (<Image image={img} />)
      )}
    </div>
  )
};

export default Images;