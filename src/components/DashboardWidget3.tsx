import { LazyLoadImage } from "react-lazy-load-image-component";
import CardStat from "./CardStat";
import ChartTitle from "./ChartTitle";
import Chart3 from "../assets/chart3.png";
import { stats } from "../sampleData";

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
        {stats.map(({ iconName, title, text }) => (
          <CardStat iconName={iconName} title={title} text={text} />
        ))}
      </div>
    </div>
  );
}

export default DashboardWidget3;
