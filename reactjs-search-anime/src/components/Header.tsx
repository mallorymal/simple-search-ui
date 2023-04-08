import { NavLink } from 'react-router-dom';
export const Header: React.FC = () => {
  return (
    <header>
      <nav className='navbar navbar-expand-lg bg-light'>
        <div className='container-fluid'>
          <div className='navbar-brand'>ReactJS</div>
          <div className='navbar-nav'>
            <NavLink className='nav-link' to='/home'>
              Home
            </NavLink>
            <NavLink className='nav-link' to='/about'>
              About
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};
