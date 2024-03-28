import { Link, Outlet } from 'react-router-dom';
import './Header.css';
export function Header() {
  return (
    <>
      <div className="header">
        <div>
          <Link to="/about" className="header-about">
            About
          </Link>
          <Link to="/">Catalog</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
