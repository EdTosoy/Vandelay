import Summary from "./Summary";

function DashboardSummary() {
  return (
    <div className=" gap-6 flex w-full justify-between items-start col-span-full">
      <Summary
        text="$55,000"
        increase
        percentageValue="+55"
        title="Today's Money"
        iconName="wallet-sharp"
      />
      <Summary
        text="2,300"
        increase
        percentageValue="+5"
        title="Today's Users"
        iconName="globe-outline"
      />
      <Summary
        text="+3,052"
        percentageValue="-14"
        title="Today's Clients"
        iconName="document-sharp"
      />
      <Summary
        text="$173,000"
        increase
        percentageValue="+8"
        title="Today's Sales"
        iconName="cart-sharp"
      />
    </div>
  );
}

export default DashboardSummary;
