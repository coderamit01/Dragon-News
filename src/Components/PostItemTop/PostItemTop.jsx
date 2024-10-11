import { BiBookmark, BiShareAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const PostItemTop = ({ post }) => {
  const { _id, author } = post;
  return (
    <div className='bg-base-200 flex items-center justify-between px-2 py-2'>
      <div className='flex items-center space-x-3'>
        <img src={author.img} alt={author.name} className='h-10 w-10 object-contain rounded-full' />
        <div className='flex flex-col'>
          <span className='font-d_500 text-base text-gray-900'>{author.name}</span>
          <p className='font-d_400 text-sm text-gray-500'>{author.published_date}</p>
        </div>
      </div>
      <div className='flex items-center space-x-2'>
        <BiBookmark className='text-lg text-gray-500' />
        <span to="#" ><BiShareAlt className='text-lg text-gray-500' /></span>
      </div>
    </div>
  );
};

export default PostItemTop;