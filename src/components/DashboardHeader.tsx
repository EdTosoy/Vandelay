import { NavLink } from "react-router-dom";

interface DashboardHeaderProps {
  pageTitle: string;
}

function DashboardHeader({ pageTitle }: DashboardHeaderProps) {
  return (
    <div className="pl-4 pt-4 flex items-center  col-span-full ">
      <div className="w-full ">
        <p className="text-xs">
          <span className="text-gray200">Pages</span> / {pageTitle}
        </p>
        <h1 className="font-bold text-sm text-gray900">{pageTitle}</h1>
      </div>
      <div className="flex text-left items-center my-4  gap-3 ">
        <div className="p-2 border bg-white border-gray150  rounded-2xl relative ">
          <input
            type="text"
            placeholder={"Type here..."}
            className=" mx-2 text-sm pl-4 "
          />
          <div className="absolute text-gray900 top-3 left-3">
            <ion-icon name="search-sharp" />
          </div>
        </div>
        <div className="flex text-gray250 gap-1 items-center">
          <div>
            <ion-icon name="person-sharp" />
          </div>
          <NavLink to={"/sign-in"}>
            <h2 className="text-xs font-bold w-11 cursor-pointer">Sign In</h2>
          </NavLink>
        </div>
        <div className="text-gray250 cursor-pointer">
          <ion-icon name="settings-sharp"></ion-icon>
        </div>
        <div className="text-gray250 mr-3 cursor-pointer">
          <ion-icon name="notifications-sharp"></ion-icon>
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
