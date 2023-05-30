import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  children?: ReactNode;
}

const Navbar: React.FC<NavbarProps> & { Loader: React.FC; Loaded: React.FC } = ({ children }) => {
  return (
    <div className="flex flex-row p-4 mb-3 bg-white border-b shadow justify-between items-center">
      <Link to="/" className="font-bold">
        Podcaster
      </Link>
      {children}
    </div>
  );
};

Navbar.Loader = () => (
  <span className="relative flex h-4 w-4">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-4 w-4 bg-sky-500"></span>
  </span>
);

Navbar.Loaded = () => (
  <span className="relative flex h-4 w-4">
    <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
  </span>
);

export default Navbar;
