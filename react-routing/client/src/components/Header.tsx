import './Header.css';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow-sm">
        <div className="navbar-collapse">
          <ul className="navbar-nav mr-auto">
            {/* TODO: Make these links to About and Catalog, with className "title" */}
            <li className="nav-item nav-link">
              <Link to="about">About</Link>
            </li>
            <li className="nav-item nav-link">
              <Link to="">Catalog</Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* Render the Outlet here. */}
      <Outlet />
    </div>
  );
}
