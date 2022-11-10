import React from 'react';

const Earn = () => {
  return (
    <div className="max-w-6xl mx-auto mt-8">
      <div className="divider"></div>
      <div className="flex flex-col md:flex-row text-center md:text-left">
        <div>
          <img className='rounded-md' src="https://pathao.com/wp-content/uploads/2018/12/BS9A9999-copy.jpg" alt="" />
        </div>
        <div className="md:pl-20">
          <h2 className="heading text-2xl text-center mb-5 mt-4 font-bold">Deliver & Earn</h2>
          <ul className="list-disc">
            <li className="paragraph text-lg mb-4">Work When You Want</li>
            <li className="paragraph text-lg mb-4">Less labor earn more within a short time</li>
            <li className="paragraph text-lg mb-4">Extra earning with bonus keeps you smiling</li>
            <li className="paragraph text-lg mb-4">Most reliable and trusted by workers</li>
          </ul>
          <button className="btn btn-accent gap-2 mt-4 justify-center poppins">
            Start Earning Now
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Earn;
