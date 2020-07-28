import React from 'react';

import NavBar from '../NavBar';

const Header = () => {
  return (
    <>
      <div className='bg-gray-200 py-4'>
        <h1>
          <a href='/'>
            <img className='h-24 mx-auto'
              src='/MyDailyStatus_Logo.png'
              alt='MyDailyStatus'
              height='60'
            />
          </a>
        </h1>
      </div>
      <NavBar />
    </>
  );
};

export default Header;