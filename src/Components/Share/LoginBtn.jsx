import { Link } from 'react-router-dom';

const LoginBtn = ({ title, icon }) => {
  return (
    <Link className='flex items-center p-2 border border-gray-500 rounded justify-center space-x-1 text-gray-700 hover:text-sky-600 hover:border-sky-600'>
      {icon}
      <span className='font-Poppins font-d_400'>
        {title}
      </span>
    </Link>
  );
};

export default LoginBtn;