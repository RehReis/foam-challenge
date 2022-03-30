import React, {useState} from 'react';
import Image from './Image.jsx'
import dummyData from '../dummydata.js';

function Images() {
  const [imgList, setImgList] = useState(dummyData);
  return (
    <div>
      {imgList.map(img =>
        (<Image image={img} />)
      )}
    </div>
  )
};

export default Images;