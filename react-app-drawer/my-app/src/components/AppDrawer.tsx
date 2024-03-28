import { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import { Link, Outlet } from 'react-router-dom';
import './AppDrawer.css';
type MenuItem = {
  name: string;
  iconUrl: string;
  path: string;
};
type Props = {
  menuItems: MenuItem[];
};
export function AppDrawer({ menuItems }: Props) {
  const about = menuItems[0];
  const catalog = menuItems[1];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className={isOpen ? 'open-header' : 'close-header'}>
        <IoMdMenu
          size={50}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        {isOpen && <div className="business-title">Hylian Shopping</div>}
        <div>
          <Link to={about.path}>
            <img
              src={`${about.iconUrl}`}
              alt="about svg"
              className="about-image"
            />
            {isOpen && 'About'}
          </Link>{' '}
        </div>{' '}
        <div>
          <Link to={catalog.path}>
            <img
              src={`${catalog.iconUrl}`}
              alt="catalog image"
              className="catalog-image"
            />
            {isOpen && 'Catalog'}
          </Link>
        </div>
      </div>
      <div className={isOpen ? 'open-outlet' : 'close-outlet'}>
        <Outlet />
      </div>
    </>
  );
}
