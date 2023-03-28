import DashboardHeader from "../components/DashboardHeader";
import Footer from "../components/Footer";
import SidePanel from "../components/SidePanel";
import TableWidget2 from "../components/TableWidget2";
import TableWidget1 from "../components/TableWidget1";

function Tables() {
  return (
    <div className="grid grid-cols-14  bg-gray100">
      <div className="col-start-1 col-end-3 px-8 py-4">
        <SidePanel />
      </div>

      <div className="col-start-3 col-end-15 flex flex-col gap-6  mr-6 ">
        <DashboardHeader pageTitle="Tables" />
        <TableWidget1 />
        <TableWidget2 />
        <div className="col-start-1 col-end-3 -mt-6">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Tables;
