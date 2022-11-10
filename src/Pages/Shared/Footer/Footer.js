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
          <img className="h-40" src={logo} alt="footer logo" />
          <p className="text-sm">
            Welcome to country fastest online delivery service{' '}
            <span className="text-lg text-red-600">Harper</span>.
            <br />
            We deliver your products quickly and efficiently.
            <br />
            We pride ourselves on our fast delivery service <br /> will work hard to get your
            products to you as soon as possible.
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
          <div className="mt-2">
            <p>
              Copyright © 2022 Harper. All rights reserved.{' '}
              <span className="text-stone-500">
                Privacy Policy Terms and Condition Return & Refund Policy
              </span>
            </p>
          </div>
        </div>
        <div className="text-base">
          <span className="footer-title mt-6">ImportantLink</span>
          <Link to="/" className="link link-hover">
            Home
          </Link>
          <Link to="/service" className="link link-hover">
            Service
          </Link>
          <Link to="/" className="link link-hover">
            Contact
          </Link>
        </div>
        <div className="text-base">
          <span className="footer-title mt-6">About Company</span>
          <Link className="link link-hover">Award</Link>
          <Link className="link link-hover">Career</Link>
          <Link className="link link-hover">e-Brochure</Link>
          <Link className="link link-hover">Coverage Map</Link>
        </div>
        <div className="text-base">
          <span className="footer-title mt-6">Support</span>
          <Link className="link link-hover">Support Center</Link>
          <Link className="link link-hover">Feedback</Link>
          <Link className="link link-hover">Person 2 Person Delivery</Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
