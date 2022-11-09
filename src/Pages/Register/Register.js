import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/MainContext';
import UseTitle from '../../Hook/UseTitle';

const Register = () => {
  UseTitle('Register page');
  const { registerUser, updateUserProfile } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const img = from.image.value;
    const password = from.password.value;
    const Cpassword = from.Cpassword.value;

    if (password !== Cpassword) {
      toast.error('Oops! your password did not matched');
    } else {
      registerUser(email, password)
        .then((res) => {
          UserProfile(name, img);
          console.log(res);
          toast.success('account successfully created');
          from.reset();
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  };
  const UserProfile = (name, image) => {
    const profile = {
      displayName: name,
      photoURL: image,
    };
    updateUserProfile(profile);
  };

  return (
    <div className='poppins'>
      <div className="register-main flex justify-center items-center mt-20 px-4 mb-20">
        <form className="w-[20rem] text-left" onSubmit={handleSubmit}>
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="enter name"
              required=""
            />
          </div>
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Image URL
            </label>
            <input
              type="text"
              id="imageUrl"
              name="image"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="enter image url"
              required=""
            />
          </div>
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="enter email"
              required=""
            />
          </div>
          <div class="mb-6">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="enter password"
              required=""
            />
          </div>
          <div class="mb-6">
            <label
              for="confirm_password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Confirm password
            </label>
            <input
              type="password"
              id="Cpassword"
              name="Cpassword"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="enter password again"
              required=""
            />
          </div>

          <button
            type="submit"
            class="mb-2 text-white bg-orange-500 font-general hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 lg:w-full">
            Sign Up
          </button>
          <Link to="/login" className=" font-general font-medium underline underline-offset-2 hover:text-orange-500">
            Already have an account Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
