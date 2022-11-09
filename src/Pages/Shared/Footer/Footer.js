import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/logo2.png';
import {
  AiFillGoogleCircle,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';

import './Footer.css';

const Footer = () => {
  return (
    <div className="w-full mt-8">
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <img className='h-40' src={logo} alt="footer logo" />
          <p className='text-sm'>
            Welcome to country fastest online delivery service <span className='text-lg text-red-600'>Harper</span>.
            <br />
            We deliver your products quickly and efficiently.
            <br />
            We pride ourselves on our fast delivery service <br /> will work hard to get your products to you as soon as possible.
          </p>
          <div className="link_css flex text-3xl gap-x-1.5 cursor-pointer">
            <Link to="/">
              <AiFillGoogleCircle />
            </Link>
            <Link to="/">
              <AiFillTwitterCircle></AiFillTwitterCircle>
            </Link>
            <Link to="/">
              <AiFillInstagram></AiFillInstagram>
            </Link>
            <Link to="/">
              <AiFillLinkedin></AiFillLinkedin>
            </Link>
          </div>
        </div>
        <div>
          <span className="footer-title">About</span>
          <Link className="link link-hover">Home</Link>
          <Link className="link link-hover">Service</Link>
          <Link className="link link-hover">Contact</Link>
        </div>
        <div>
          <span className="footer-title">Company Info</span>
          <Link className="link link-hover">Award</Link>
          <Link className="link link-hover">Why you are a failure</Link>
          <Link className="link link-hover">Stephen He</Link>
          <Link className="link link-hover">Press kit</Link>
        </div>
        <div>
          <span className="footer-title">Support</span>
          <Link className="link link-hover">Support Center</Link>
          <Link className="link link-hover">Feedback</Link>
          <Link className="link link-hover">Accessability</Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
