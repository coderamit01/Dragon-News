import React from 'react';
import { Link } from 'react-router-dom';

const ZoneItem = ({link,img}) => {
  return (
    <Link to={link} className='block'>
      <img src={img} alt="" className='mx-auto' />
    </Link>
  );
};

export default ZoneItem;