import Chart4 from "../assets/chart4.png";
import ChartTitle from "./ChartTitle";
import { LazyLoadImage } from "react-lazy-load-image-component";

function DashboardWidget4() {
  return (
    <div className="col-start-6 col-span-full bg-white p-4 rounded-2xl">
      <div className="w-full">
        <ChartTitle
          title="Sales overview"
          spanText="(+5) more"
          text="in 2021"
        />
        <div className="pt-8">
          <LazyLoadImage src={Chart4} alt="chart 4" />
        </div>
      </div>
    </div>
  );
}

export default DashboardWidget4;
