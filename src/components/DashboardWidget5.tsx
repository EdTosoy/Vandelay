import ProjectItem from "./ProjectItem";
import ChartTitle from "./ChartTitle";
import { projects } from "../sampleData";

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
          {projects.map(
            ({
              budget,
              company,
              completionPercentage,
              logoImg,
              memberImg,
              progressbarValue,
            }) => (
              <ProjectItem
                logoSrc={logoImg}
                memberSrc={memberImg}
                company={company}
                budget={budget}
                completionPercentage={completionPercentage}
                progressbarValue={progressbarValue}
              />
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DashboardWidget5;
