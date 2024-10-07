import LatestNews from '../Components/Latestnews/LatestNews';
import Navbar from '../Components/Navbar/Navbar';
import Categories from '../Components/Categories/Categories';
import Posts from '../Components/Posts/Posts';
import HomeRightSidebar from '../Components/HomeRightSidebar/HomeRightSidebar';

const Home = () => {
  return (
    <div>
      <div className='container mx-auto px-3 pt-3 pb-8'>
        <LatestNews />
        <Navbar />
      </div>
      <div className='container mx-auto px-3 py-10'>
        <div className='grid md:grid-cols-4 gap-6'>
          <Categories />
          <div className='md:col-span-2'>
            <Posts />
          </div>
          <HomeRightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Home;