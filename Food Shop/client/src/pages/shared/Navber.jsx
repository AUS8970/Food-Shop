import { Link, NavLink } from 'react-router-dom';
import '../../index.css'
import useAuth from '../../hooks/useAuth';
import useTheme from '../../hooks/useTheme';
import '../../index.css';
import { CiDark, CiLight } from 'react-icons/ci';

const Navber = () => {

  // TODO 1: dynamic theme light and dark mode
  // TODO 2: 

  const { user, signOutUser } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const handleSignOutUser = () => {
    signOutUser()
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  };

  const links = <>
    <li><NavLink to={'/'}> Home </NavLink></li>
    <li><NavLink to={'/allFoods'}> All Foods </NavLink></li>
    <li><NavLink to={'/gallery'}> Gallery </NavLink></li>
  </>

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            { links }
          </ul>
        </div>
        <Link to={'/'} className="btn btn-ghost text-2xl"> 
          <img className='w-12' src="../../../src/assets/food-drink-logo-white-background_1277164-19895-removebg-preview.png" alt="" />
          <span className="font-roboto text-2xl"> Food Shop </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <button
          className={`border rounded-full text-xl p-3 cursor-pointer`}
          onClick={toggleTheme}
          style={{
            background: theme === "dark" ? "#333" : "#fff",
            color: theme === "dark" ? "#fff" : "#333",
          }}
        >
          {theme === "light" ? <CiDark /> : <CiLight />}
        </button>
        {
          user ? <>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-circle">
                <img className='w-14 rounded-full' src={user.photoURL} alt="" />
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
                <li className=''><NavLink to={'/myFood'}> My Foods </NavLink></li>
                <li className=''><NavLink to={'/addFood'}> Add food </NavLink></li>
                <li className=''><NavLink to={'/myOrder'}> My Orders </NavLink></li>
                <li onClick={handleSignOutUser} className="btn bg-yellow-800 text-white"> Log Out </li>
              </ul>
            </div>
          </> : <>
            <Link to={'/logIn'} className="btn bg-yellow-600 text-white"> Log In </Link>
          </>
        }
      </div>
    </div>
  );
};

export default Navber;