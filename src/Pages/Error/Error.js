import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='bg-red-200 text-center h-screen flex justify-center items-center'>
            <div>
            <h2 className='heading text-5xl font-extrabold tracking-wider'>Page not Found</h2>
            <p className='paragraph text-2xl mt-6'>Go to <Link className='underline underline-offset-2 text-2xl text-green-600' to='/'>home</Link> page </p>
            </div>
        </div>
    );
};

export default Error;