import { NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import SidePanelItem from "./SidePanelItem";
import LogoBlack from "../assets/Logoblack.png";

function SidePanel() {
  return (
    <div>
      <NavLink to={"/"}>
        <div className="py-7">
          <LazyLoadImage src={LogoBlack} alt="logo" />
        </div>
        <div className=" w-full gradient-gray mb-6 " />
      </NavLink>
      <SidePanelItem name="Dashboard" iconName="home-sharp" path="/dashboard" />
      <SidePanelItem
        name="Tables"
        iconName="stats-chart-sharp"
        path="/tables"
      />
      <SidePanelItem name="Billing" iconName="card-sharp" />
      <SidePanelItem name="RTL" iconName="build-sharp" />

      <h2 className="text-xs font-bold text-gray900 ml-5 my-2">
        ACCOUNT PAGES
      </h2>
      <SidePanelItem name="Profile" iconName="person-sharp" />
      <SidePanelItem name="Sign In" iconName="document-sharp" path="/sign-in" />
      <SidePanelItem name="Sign Up" iconName="rocket-sharp" path="/" />
      <div className="w-full p-4 mt-12  bg-adBG bg-cover rounded-2xl">
        <div
          className="bg-white  text-cyan
         p-1  w-min h-min rounded-xl grid place-content-center"
        >
          <ion-icon name="help-circle-sharp" size="large" />
        </div>
        <div className="text-white mt-5 mb-2">
          <h2 className="text-lg font-bold">Need help?</h2>
          <p className="text-sm">Please check our docs</p>
        </div>
        <div>
          <button className="rounded-xl text-xs font-bold bg-white p-2 w-full ">
            DOCUMENTATION
          </button>
        </div>
      </div>
    </div>
  );
}

export default SidePanel;
