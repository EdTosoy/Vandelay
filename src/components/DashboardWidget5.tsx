import ProjectItem from "./ProjectItem";
import ChartTitle from "./ChartTitle";
import xdLogo from "../assets/xd.svg";

import members1 from "../assets/Members1.png";
import members2 from "../assets/Members2.png";
import members3 from "../assets/Members3.png";
import members4 from "../assets/Members4.png";
import members5 from "../assets/Members5.png";
import members6 from "../assets/Members6.png";
import companyLogo1 from "../assets/companyLogo1.png";
import companyLogo2 from "../assets/companyLogo2.png";
import companyLogo3 from "../assets/companyLogo3.png";
import companyLogo4 from "../assets/companyLogo4.png";
import companyLogo5 from "../assets/companyLogo5.png";

function DashboardWidget5() {
  return (
    <div className="col-span-8  bg-white p-4 rounded-2xl">
      <ChartTitle
        title={"Projects"}
        text={"30 done this month"}
        spanText={<ion-icon name="checkmark-circle-sharp"></ion-icon>}
      />
      <table className="w-full mt-6">
        <thead>
          <tr className="text-left text-xxs text-gray200">
            <th className="pb-4">COMPANIES</th>
            <th className="pb-4">MEMBERS</th>
            <th className="pb-4">BUDGET</th>
            <th className="pb-4">COMPLETION</th>
          </tr>
        </thead>
        <tbody>
          <ProjectItem
            logoSrc={xdLogo}
            memberSrc={members1}
            company={"Chakra Soft UI Version"}
            budget={"$14,000"}
            completionPercentage={"60%"}
            progressbarValue={"w-3/5"}
          />
          <ProjectItem
            logoSrc={companyLogo1}
            memberSrc={members2}
            company={"Add Progress Track"}
            budget={"$3,000"}
            completionPercentage={"10%"}
            progressbarValue={"w-2/12"}
          />
          <ProjectItem
            logoSrc={companyLogo2}
            memberSrc={members3}
            company={"Fix Platform Errors"}
            budget={"Not set"}
            completionPercentage={"100%"}
            progressbarValue={"w-1/1"}
          />
          <ProjectItem
            logoSrc={companyLogo3}
            memberSrc={members4}
            company={"Launch our Mobile App"}
            budget={"$32,000"}
            completionPercentage={"100%"}
            progressbarValue={"w-1/1"}
          />
          <ProjectItem
            logoSrc={companyLogo4}
            memberSrc={members5}
            company={"Add the New Pricing Page"}
            budget={"$400"}
            completionPercentage={"25%"}
            progressbarValue={"w-1/4"}
          />
          <ProjectItem
            logoSrc={companyLogo5}
            memberSrc={members6}
            company={"Redesign New Online Shop"}
            budget={"$7,600"}
            completionPercentage={"40%"}
            progressbarValue={"w-2/5"}
          />
        </tbody>
      </table>
    </div>
  );
}

export default DashboardWidget5;
