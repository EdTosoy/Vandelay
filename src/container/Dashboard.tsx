import DashboardHeader from "../components/DashboardHeader";
import Footer from "../components/Footer";
import SidePanel from "../components/SidePanel";
import DashboardSummary from "../components/DashboardSummary";
import DashboardWidget1 from "../components/DashboardWidget1";
import DashboardWidget2 from "../components/DashboardWidget2";
import DashboardWidget3 from "../components/DashboardWidget3";
import DashboardWidget4 from "../components/DashboardWidget4";
import DashboardWidget5 from "../components/DashboardWidget5";
import DashboardWidget6 from "../components/DashboardWidget6";

function Dashboard() {
  return (
    <div className="grid grid-cols-14  bg-gray100">
      <div className="col-start-1 col-end-3 px-8 py-4">
        <SidePanel />
      </div>

      <div className="col-start-3 col-end-15 flex flex-col gap-6  mr-6 ">
        <DashboardHeader pageTitle="Dashboard" />
        <DashboardSummary />

        <div className="grid grid-cols-12 gap-6">
          <DashboardWidget1 />
          <DashboardWidget2 />
        </div>
        <div className="grid grid-cols-12 gap-6">
          <DashboardWidget3 />
          <DashboardWidget4 />
        </div>
        <div className="grid grid-cols-12  gap-6">
          <DashboardWidget5 />
          <DashboardWidget6 />
        </div>
        <div className="col-start-1 col-end-3 -mt-6">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
