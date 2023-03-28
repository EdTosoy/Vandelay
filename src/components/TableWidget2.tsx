import ProjectItem from "./ProjectItem";
import ChartTitle from "./ChartTitle";
import { tableProjects } from "../sampleData";

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
          {tableProjects.map(
            ({
              budget,
              company,
              completionPercentage,
              logoImg,
              progressbarValue,
              status,
            }) => (
              <ProjectItem
                logoSrc={logoImg}
                company={company}
                budget={budget}
                completionPercentage={completionPercentage}
                progressbarValue={progressbarValue}
                status={status}
              />
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TableWidget2;
