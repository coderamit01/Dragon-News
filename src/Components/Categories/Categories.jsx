import { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import CategoryItem from '../CategoryItem/CategoryItem';

const Categories = () => {
  const [categories,setCategories] = useState([]);

  useEffect(() => {
    fetch('../../../public/categories.json')
    .then(res => res.json())
    .then(data => setCategories(data))
  },[])

  return (
    <div className="lg:sticky lg:top-4 lg:self-start">
      <SectionTitle title="All Caterogy" />
      <div className='flex flex-col pt-2'>
          {
            categories.map(category => <CategoryItem key={category.id} category={category} />)
          }
      </div>
    </div>
  );
};

export default Categories;