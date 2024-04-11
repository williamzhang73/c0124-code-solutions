import { Link, Outlet } from 'react-router-dom';
import './Header.css';
export function Header() {
  return (
    <>
      <div className="header">
        <Link to="/about" className="about">
          About
        </Link>
        <Link to="/catalogs" className="catalog">
          Catalog
        </Link>
      </div>
      <Outlet />
    </>
  );
}
