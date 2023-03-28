import Chart3 from "../assets/chart3.png";

import { LazyLoadImage } from "react-lazy-load-image-component";
import CardStat from "./CardStat";
import ChartTitle from "./ChartTitle";

function DashboardWidget3() {
  return (
    <div className="col-span-5 bg-white rounded-2xl p-4 flex flex-col gap-5">
      <div>
        <LazyLoadImage src={Chart3} alt="chart 3" className="w-full" />
      </div>

      <ChartTitle
        title="Active Users"
        text=" than last week"
        spanText="(+23)"
      />
      <div className="flex w-full gap-16 ">
        <CardStat iconName="wallet-sharp" title="Users" text="32,984" />
        <CardStat iconName="rocket-sharp" title="Clicks" text="2,42m" />
        <CardStat iconName="cart-sharp" title="Sales" text="2400$" />
        <CardStat iconName="build-sharp" title="Items" text="320" />
      </div>
    </div>
  );
}

export default DashboardWidget3;
