function DashboardWidget2() {
  return (
    <div className="col-start-8 chart2BG col-span-full bg-cover p-10">
      <div className="flex flex-col justify-between h-full gap-5">
        <div>
          <h3 className="text-lg my-1 font-bold text-white">
            Purity UI Dashboard
          </h3>
          <p className="text-white text-sm">
            from colors, cards, typography to complex elements,
            <br /> you will find the full documentaion
          </p>
        </div>
        <div className="flex items-center gap-2 font-bold text-white -mb-3 cursor-pointer">
          <h3 className="text-xs">Read more </h3>
          <div className="grid">
            <ion-icon name="arrow-forward-sharp" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardWidget2;
