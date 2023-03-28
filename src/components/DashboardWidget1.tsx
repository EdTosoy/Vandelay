import { LazyLoadImage } from "react-lazy-load-image-component";
import Chakra from "../assets/Charka.png";

function DashboardWidget1() {
  return (
    <div className="col-span-7 bg-white p-4 rounded-2xl flex justify-between items-center">
      <div className="flex flex-col justify-between h-full gap-5">
        <div>
          <p className=" text-xs font-bold text-gray200 ">
            Build by developers
          </p>
          <h3 className="text-lg my-1 font-bold text-gray900">
            Purity UI Dashboard
          </h3>
          <p className="text-gray200 text-sm">
            from colors, cards, typography to complex elements,
            <br /> you will find the full documentaion
          </p>
        </div>
        <div className="flex items-center gap-2 font-bold cursor-pointer">
          <h3 className="text-gray900 text-xs">Read more </h3>
          <div className="grid">
            <ion-icon name="arrow-forward-sharp" />
          </div>
        </div>
      </div>
      <div>
        <LazyLoadImage src={Chakra} alt="chakra image" />
      </div>
    </div>
  );
}

export default DashboardWidget1;
