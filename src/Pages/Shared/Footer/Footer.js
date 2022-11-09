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
          <p>
            Welcome to asian Car doctor.
            <br />
            We fix car with snap of a thanos finger.
            <br />
            Don't be a failure.We are expert in failure management.
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
          <span className="footer-title">Company</span>
          <Link className="link link-hover">Why Car Doctor</Link>
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
