import { NavLink } from "react-router-dom";

interface NavItemProps {
  name: string;
  iconName: string;
  path: string;
}

function NavItem({ name, iconName, path }: NavItemProps) {
  return (
    <NavLink to={path}>
      <li className="flex gap-1 items-center cursor-pointer">
        <div className="grid">
          <ion-icon name={iconName} color="white" type="solid" />
        </div>
        <p className="text-xs font-bold">{name}</p>
      </li>
    </NavLink>
  );
}

export default NavItem;
