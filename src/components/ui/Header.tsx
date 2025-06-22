*/
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Websites', path: '/website-services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white">
            SimplifyAI.design
          </Link>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-lg hover:text-blue-300 transition-colors duration-200 ${
                    isActive ? 'text-blue-400 font-semibold' : 'text-slate-200'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          <Link to="/contact" className="hidden md:inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
```tsx
/*
