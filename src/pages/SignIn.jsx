import { useContext } from "react";
import { AuthContext } from "../Components/Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SignIn = () => {

  const {userLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    // Sign In 
    userLogin(email,password)
    .then((userCredential) => {
      //Redirected user to destination page after login
      navigate(location?.state ? location.state : '/');
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
            <form onSubmit={handleSubmit} className="card-body">
            <h2 className='text-3xl text-center font-d_700 mb-2 font-Poppins'>Sign In</h2>
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p className="label-text text-center">Don't have an Account <Link to="/signup">Register</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;