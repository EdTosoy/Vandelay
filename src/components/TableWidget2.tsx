import ProjectItem from "./ProjectItem";
import ChartTitle from "./ChartTitle";
import xdLogo from "../assets/xd.svg";
import companyLogo1 from "../assets/companyLogo1.png";
import companyLogo2 from "../assets/companyLogo2.png";
import companyLogo3 from "../assets/companyLogo3.png";
import companyLogo4 from "../assets/companyLogo4.png";

function TableWidget2() {
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
            <th className="pb-4">BUDGET</th>
            <th className="pb-4"> STATUS</th>
            <th className="pb-4">COMPLETION</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          <ProjectItem
            logoSrc={xdLogo}
            company={"Chakra Soft UI Version"}
            budget={"$14,000"}
            completionPercentage={"60%"}
            progressbarValue={"w-3/5"}
            status={"Working"}
          />
          <ProjectItem
            logoSrc={companyLogo1}
            company={"Add Progress Track"}
            budget={"$3,000"}
            completionPercentage={"10%"}
            progressbarValue={"w-2/12"}
            status={"Canceled"}
          />
          <ProjectItem
            logoSrc={companyLogo2}
            company={"Fix Platform Errors"}
            budget={"Not set"}
            completionPercentage={"100%"}
            progressbarValue={"w-1/1"}
            status={"Done"}
          />
          <ProjectItem
            logoSrc={companyLogo3}
            company={"Launch our Mobile App"}
            budget={"$32,000"}
            completionPercentage={"100%"}
            progressbarValue={"w-1/1"}
            status={"Done"}
          />
          <ProjectItem
            logoSrc={companyLogo4}
            company={"Add the New Pricing Page"}
            budget={"$400"}
            completionPercentage={"25%"}
            progressbarValue={"w-1/4"}
            status={"Working"}
          />
        </tbody>
      </table>
    </div>
  );
}

export default TableWidget2;
