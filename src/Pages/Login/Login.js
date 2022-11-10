import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/MainContext';
import UseTitle from '../../Hook/UseTitle';

const Login = () => {
  UseTitle('Login page');

  const { SignIn, googleSignIN } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleSubmit = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(email, password);

    SignIn(email, password)
      .then((res) => {
        console.log(res);
        from.reset();
        toast.success('login successful');
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const googleLoginButtonClicked = () => {
    googleSignIN(provider)
      .then((res) => {
        console.log(res);
        toast.success('login successful');
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="poppins">
      <div className="login-from-main flex justify-center items-center mt-20 px-4 mb-20">
        <form className="lg:w-[20rem] text-left" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="enter email"
              required=""
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="confirm_password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="confirm_password"
              name="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="enter password"
              required=""
            />
          </div>

          <button
            type="submit"
            className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 lg:w-full">
            Sign In
          </button>

          <div className="button-group mt-8">
            <button
              onClick={googleLoginButtonClicked}
              type="button"
              className="text-white w-full bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
              <svg
                className="mr-2 -ml-1 w-4 h-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512">
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
              </svg>
              Sign in with Google
            </button>
          </div>

          <Link
            to="/signup"
            className="font-general font-medium underline underline-offset-2 hover:text-orange-500">
            I don't have an account, Register now
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
