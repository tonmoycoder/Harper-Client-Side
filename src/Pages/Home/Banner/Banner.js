import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-7xl heading font-bold">Deliveries you can depend on</h1>
            <h1 className="mb-5 heading text-amber-400 text-7xl second_heading font-bold">
              When it matters.
            </h1>
            <p className="mb-5 poppins text-lg tracking-wide ">
              Harper Courier guarantees reliable delivery of your product to your customer, at the
              right location in the right time through its efficient distribution management.
            </p>
            <button className="btn btn-accent mt-4 poppins">
              <Link to="/login">Get Started</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
