import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const navLinks = [
    {
      id: 'home',
      title: 'Home',
      path: '/',
    },
    {
      id: 'about',
      title: 'About',
      path: '/about',
    },
    {
      id: 'projects',
      title: 'Projects',
      path: '/projects',
    },
    {
      id: 'blog',
      title: 'Blog',
      path: '/blog',
    },
    {
      id: 'contact',
      title: 'Contact',
      path: '/contact',
    },
  ];

  return (
    <nav className="w-full flex items-center py-5 fixed top-0 z-20 bg-primary/80 backdrop-blur-sm">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-6">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <span className="text-white text-[18px] font-bold cursor-pointer flex">
            Portfolio <span className="text-[#915EFF]">&nbsp;3D</span>
          </span>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <Link to={nav.path}>{nav.title}</Link>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div
            className="w-[28px] h-[28px] object-contain cursor-pointer flex items-center justify-center"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? (
              <FaTimes className="w-6 h-6 text-white" />
            ) : (
              <FaBars className="w-6 h-6 text-white" />
            )}
          </div>

          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? 'text-white' : 'text-secondary'
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <Link to={nav.path}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
