import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = ({category}) => {
  return (
    <Link to='#' className='transition-all text-gray-500 px-4 py-2 font-Poppins font-d_500 hover:bg-base-200 hover:text-black'>
      {category.name}
    </Link>
  );
};

export default CategoryItem;