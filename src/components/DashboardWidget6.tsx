import ChartTitle from "./ChartTitle";
import OrderItem from "./OrderItem";
import { orders } from "../sampleData";

function DashboardWidget6() {
  return (
    <div className="col-start-9 col-span-full bg-white p-4 rounded-2xl h-min">
      <ChartTitle title="Orders overview" text="this month" spanText="+30%" />
      <ul className="mt-10">
        {orders.map(({ text, title, iconColor, iconName, svg, svgAlt }) => (
          <OrderItem
            iconColor={iconColor}
            text={text}
            title={title}
            iconName={iconName}
            svg={svg}
            svgAlt={svgAlt}
          />
        ))}
      </ul>
    </div>
  );
}

export default DashboardWidget6;
