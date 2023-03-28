import AuthorItem from "./AuthorItem";
import ChartTitle from "./ChartTitle";

import Person1 from "../assets/person1.png";
import Person2 from "../assets/person2.png";
import Person3 from "../assets/person3.png";
import Person4 from "../assets/person4.png";
import Person5 from "../assets/person5.png";
import Person6 from "../assets/person6.png";

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
          <AuthorItem
            image={Person1}
            name={"Elaine Benes"}
            email={"elaine@vandelay.com"}
            position={"Manager"}
            role={"Organization"}
            online
            employedDate={"14/06/21"}
          />
          <AuthorItem
            image={Person2}
            name={"Sidra Holland"}
            email={"sidra@vandelay.com"}
            position={"Manager"}
            role={"Organization"}
            employedDate={"14/06/21"}
          />
          <AuthorItem
            image={Person3}
            name={"Cosmo Kramer"}
            email={"kramer@vandelay.com"}
            position={"Programmer"}
            role={"Developer"}
            online
            employedDate={"14/06/21"}
          />
          <AuthorItem
            image={Person4}
            name={"Frank Costanza"}
            email={"frank@vandelay.com"}
            position={"Executive"}
            role={"Projects"}
            employedDate={"14/06/21"}
          />
          <AuthorItem
            image={Person5}
            name={"Frank Costanza"}
            email={"frank@vandelay.com"}
            position={"Programmer"}
            role={"Developer"}
            employedDate={"14/06/21"}
          />
          <AuthorItem
            image={Person6}
            name={"Art VanDelay"}
            email={"art.ie@vandelay.com"}
            position={"Designer"}
            role={"UI/UX Design"}
            employedDate={"14/06/21"}
          />
        </tbody>
      </table>
    </div>
  );
}

export default TableWidget1;
