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
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>
                <img
                  src={`${item.iconUrl}`}
                  alt="image"
                  className="about-image"
                />
                {isOpen && item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="open-outlet">
        <Outlet />
      </div>
    </>
  );
}
