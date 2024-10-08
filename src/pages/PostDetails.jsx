import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../Components/Header/Header";
import PostSidebar from "../Components/PostSidebar/PostSidebar";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import { BiLeftArrowAlt } from "react-icons/bi";

const PostDetails = () => {
  const news = useLoaderData();
  const {id} = useParams();
  const currentNews = news.find(item => item._id === id);
  
  const {image_url,title,details} = currentNews;

  return (
    <div>
      <div className='container mx-auto px-3 pt-5 pb-5'>
        <div className='grid md:grid-cols-4 gap-6'>
          <div className="md:col-span-3">
            <SectionTitle title="Dragon News" />
            <div className="border border-base-200 p-4 space-y-3 rounded mt-5">
              <img src={image_url} alt={title} className="w-full" />
              <h2 className="text-3xl font-Poppins font-d_700">{title}</h2>
              <p className='font-Poppins font-base font-d_400 text-gray-500'>{details}</p>
              <Link to='#' className='py-2 px-5 bg-rose-500 text-white font-Poppins inline-flex items-center space-x-2'>
              <BiLeftArrowAlt className="text-white font-Poppins text-lg" />
              <span>All news in this category</span>
              </Link>
            </div>
          </div>
          <PostSidebar />
        </div>
      </div>
    </div>
  );
};

export default PostDetails;