import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

interface sidePanelProps {
  iconName: string;
  name: string;
  path?: string;
}
function SidePanelItem({ iconName, name, path }: sidePanelProps) {
  let location = useLocation();
  const isActive = location.pathname == path;
  return (
    <NavLink to={path || "/"}>
      <div
        className={`${
          isActive ? "drop-shadow-md text-gray900  bg-white" : "text-gray200"
        } rounded-2xl px-4 py-3 flex gap-3 items-center `}
      >
        <div
          className={`${
            isActive ? "bg-cyan  text-white" : "bg-white  text-cyan"
          } p-2  w-min h-min rounded-xl grid place-content-center drop-shadow-sm`}
        >
          <ion-icon name={iconName} />
        </div>
        <div>
          <h2 className="text-xs font-bold ">{name}</h2>
        </div>
      </div>
    </NavLink>
  );
}

export default SidePanelItem;
