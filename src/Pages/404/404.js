import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <div className="min-h-screen flex items-center justify-center bg-whi-custom-1 py-12 px-4 sm:px-6 lg:px-8">
    	<div class="max-w-md w-full space-y-8 text-center">
      		<div class="text-5xl font-dark font-bold">404</div>
            <p class="text-2xl md:text-3xl font-light leading-normal"
            >Sorry we couldn't find this page. </p>
          <button class="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-custom-2 active:bg-blue-custom-2 hover:bg-blue-custom-3 hover:text-blue-custom-1">
          <Link to="/">
            Back to home
          </Link></button>
    </div>
    </div>
  </div>
);

export default NotFound;