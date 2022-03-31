import React, {useState, useEffect} from 'react';
import Image from './Image.jsx'
import axios from 'axios';

function Images() {
  const [imgList, setImgList] = useState([]);
  const [filter, setFilter] = useState(null);
  const [page, setPage] = useState(0);

  const getImages = () => {
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
    getImages();
  }, [filter, page])

  const changePage = (num) => {
    if (num === 1) {
      setPage(page + 1);
    } else {
      setPage(page - 1);
    }
  }

  const changeFilter = async (filterBy) => {
    if (filterBy === 'foaming') {
      await setFilter(true);
    } else if (filterBy === 'non-foaming') {
      await setFilter(false);
    } else {
      await setFilter(null);
    }
    setPage(0);
  }

  return (
    <div>
      <label htmlFor="filter">Filter by:</label>
      <select name="filter" id="filter" required="required" onChange={(e) => changeFilter(e.target.value)}>
      <option value="unclassified">unclassified</option>
        <option value="foaming">foaming</option>
        <option value="non-foaming">non-foaming</option>
      </select>
      <br></br>
      {page > 0 && <button onClick={() => {changePage(-1)}}>Previous Page</button>}
      {imgList.length > 11 && <button onClick={() => {changePage(1)}}>Next Page</button>}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {imgList.map(img =>
        (<Image key={img['_id']} image={img} getImages={getImages}/>)
        )}
      </div>
    </div>
  )
};

export default Images;