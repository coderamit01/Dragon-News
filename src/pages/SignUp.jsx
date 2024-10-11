import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Components/Provider/AuthProvider';

const SignUp = () => {
  const {user,userRegister,profileUpdate} = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(location);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const username = form.get('username');
    const email = form.get('email');
    const password = form.get('password');

    userRegister(email,password)
    .then((userCredential) => {
      profileUpdate(name)
      .then(() => {
        navigate('/login');
      })
      .catch((error) => {
        
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }


  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="w-4/12 mx-auto">
          <div className="card bg-base-100 shrink-0 shadow-2xl">
            <form onSubmit={handleSignUp} className="card-body">
              <h2 className='text-3xl text-center font-d_700 mb-2 font-Poppins'>Sign Up</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Name" className="input input-bordered"  />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input type="text" name="username" placeholder="Usrname" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
              <p className="label-text text-center">Already have an account <Link to="/login">Sign In</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;