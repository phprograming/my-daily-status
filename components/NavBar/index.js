import React from 'react';
import Link from 'next/link';

const NavLink = ({ href, children }) => {
  return (
    <Link href={href}>
      <a className='p-2 hover:bg-teal-600 focus:outline-none focus:shadow-outline'>{children}</a>
    </Link>
  );
};

const NavBar = () => {
  return (
    <div className='bg-gray-500 py-4 text-center'>
      <NavLink href='/'>Início</NavLink>
      <NavLink href='/about'>Sobre</NavLink>
      <NavLink href='/register'>Cadastre-se</NavLink>
      <NavLink href='/login'>Entra</NavLink>
    </div>
  );
};

export default NavBar;