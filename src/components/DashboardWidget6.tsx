import ChartTitle from "./ChartTitle";
import OrderItem from "./OrderItem";
import xdlogo from "../assets/xd.svg";

function DashboardWidget6() {
  return (
    <div className="col-start-9 col-span-full bg-white p-4 rounded-2xl h-min">
      <ChartTitle title="Orders overview" text="this month" spanText="+30%" />
      <ul className="mt-10">
        <OrderItem
          iconColor={"text-cyan"}
          text={"22 DEC 7:20 PM"}
          title={"$2400, Design changes"}
          iconName="notifications-sharp"
        />
        <OrderItem
          iconColor={"text-red-500"}
          text={"21 DEC 11:21 PM"}
          title={"New order #4219423"}
          iconName="logo-css3"
        />
        <OrderItem
          iconColor={"text-blue-400"}
          text={"21 DEC 9:28 PM"}
          title={"Server Payments for April"}
          iconName="cart-sharp"
        />
        <OrderItem
          iconColor={"text-orange-300"}
          text={"20 DEC 3:52 PM"}
          title={"New card added for order #3210145"}
          iconName="card-sharp"
        />
        <OrderItem
          iconColor={"text-purple-400"}
          text={"19 DEC 11:35 PM"}
          title={"Unlock packages for Development"}
          iconName="logo-dropbox"
        />
        <OrderItem
          text={"18 DEC 4:41 PM"}
          svg={xdlogo}
          svgAlt="xdLogo"
          title={"New order #9851258"}
        />
      </ul>
    </div>
  );
}

export default DashboardWidget6;
