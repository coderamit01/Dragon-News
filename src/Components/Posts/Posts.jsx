import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import PostItem from '../PostItem/PostItem';

const Posts = () => {
  const [posts,setPosts] = useState([]);

  useEffect(() => {
    fetch('../../../public/news.json')
    .then(res => res.json())
    .then(data => setPosts(data))
  },[])

  return (
    <>
      <SectionTitle title="Dragon News Home" />
      <div className='flex flex-col pt-3 gap-5'>
          {
            posts.map(post => <PostItem key={post._id} post={post} />)
          }
      </div>
    </>
  );
};

export default Posts;