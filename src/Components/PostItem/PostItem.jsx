import { BiSolidShow, BiSolidStar } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import PostItemTop from '../PostItemTop/PostItemTop';

const PostItem = ({ post }) => {
  const { _id, title, image_url, details, total_view, rating } = post;

  let star = [];
  for (let i = 0; i < Math.round(rating.number); i++) {
    star.push(<BiSolidStar key={i} className='text-[#FF8C47] text-base' />);
  }

  return (
    <div className='border border-base-200 rounded'>
      <Link to={`post/${_id}`}>
        <PostItemTop post={post} />
        <div className='p-3 space-y-3'>
          <h2 className='font-Poppins font-d_700 text-xl text-gray-900'><span to="#">{title}</span></h2>
          <img src={image_url} alt={title} className='' />
          <p className='font-Poppins font-base font-d_400 text-gray-500 line-clamp-3'>{details}</p>
          <p className='text-[#FF8C47] font-Poppins font-base font-d_500'>Read More</p>
          <div className='flex items-center justify-between py-2 border-t border-base-200'>
            <div className='flex items-center space-x-2'>
              {star}
              <p className='text-base text-gray-500 font-Poppins font-d_400'>{rating.number}</p>
            </div>
            <div className='flex items-center space-x-2'>
              <BiSolidShow className='text-lg text-gray-500' />
              <p className='text-base text-gray-500 font-Poppins font-d_400'>{total_view}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostItem;