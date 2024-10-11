import { Link } from 'react-router-dom';
import ProfileImg from '../../assets/images/user.png'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext);
  const signOut = () => {
    logOut()
    .then(() =>{
      
    })
    .catch(() =>{

    })
  }

  const navItems = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/'>About</Link></li>
    <li><Link to='/'>Career</Link></li>
  </>
  return (
    <div className="navbar bg-base-100 px-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-Poppins text-base">
            {navItems}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-Poppins text-base">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end space-x-3 px-0">
        <img src={ProfileImg} alt='' className='w-10 h-10 object-contain'/>
        {
          user ? <Link onClick={signOut} to='#' className="py-2 px-8 bg-gray-950 text-white">LogOut</Link> : <Link to='/login' className="py-2 px-8 bg-gray-950 text-white">LogIn</Link>
        }
        
      </div>
    </div>
  );
};

export default Navbar;