import moment from 'moment';
import Logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <div className='container mx-auto px-3 pb-3 pt-8'>
      <div className='text-center space-y-1'>
      <img src={Logo} alt='' className='mx-auto' />
      <p className='text-base text-gray-500 font-Poppins font-d_400'>Journalism Without Fear or Favour</p>
      <p className='text-xl text-gray-900 font-Poppins font-d_400'>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
    </div>
  );
};

export default Header;