import AuthorItem from "./AuthorItem";
import ChartTitle from "./ChartTitle";

import { authors } from "../sampleData";
function TableWidget1() {
  return (
    <div className="col-span-8  bg-white p-4 rounded-2xl">
      <ChartTitle title={"Authors Table"} />
      <table className="w-full  table-auto mt-6">
        <thead>
          <tr className="text-left text-xxs text-gray200 ">
            <th>
              <h4 className="pb-3">AUTHOR</h4>
            </th>
            <th>
              <h4 className="text-center pb-3">FUNCTION</h4>
            </th>
            <th>
              <h4 className="pb-3">STATUS</h4>
            </th>
            <th>
              <h4 className="pb-3">EMPLOYED</h4>
            </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {authors.map(
            ({ email, employedDate, image, name, online, position, role }) => (
              <AuthorItem
                image={image}
                name={name}
                email={email}
                position={position}
                role={role}
                online={online}
                employedDate={employedDate}
              />
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TableWidget1;
