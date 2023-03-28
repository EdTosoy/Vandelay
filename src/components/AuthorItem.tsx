import { LazyLoadImage } from "react-lazy-load-image-component";

interface AuthorItemProps {
  image: string;
  name: string;
  email: string;
  position: string;
  role: string;
  online?: boolean;
  employedDate: string;
}

function AuthorItem({
  image,
  name,
  email,
  position,
  role,
  online,
  employedDate,
}: AuthorItemProps) {
  return (
    <tr>
      <td className="border-t border-gray150 py-2">
        <div className="flex gap-3 -ml-1">
          <div className="grid ">
            <LazyLoadImage src={image} alt={"company logo"} />
          </div>
          <div>
            <h2 className="text-sm font-bold text-gray900">{name}</h2>
            <p className="text-sm text-gray250">{email}</p>
          </div>
        </div>
      </td>

      <td className="border-t border-gray150 text-sm">
        <div className="flex justify-center ">
          <div className="w-1/3 pl-9">
            <h2 className="text-sm font-bold text-gray900">{position}</h2>
            <p className="text-sm text-gray250">{role}</p>
          </div>
        </div>
      </td>
      <td className="border-t border-gray150 text-sm">
        <div className="flex w-full -ml-3">
          {online ? (
            <div className="rounded-lg px-3 p-0.5 w-min  bg-green  text-white">
              Online
            </div>
          ) : (
            <div className="rounded-lg px-3 p-0.5 w-min  bg-gray50 text-white">
              Offline
            </div>
          )}
        </div>
      </td>

      <td className="border-t border-gray150 m ">
        <div className="">
          <p className="-ml-0.5  text-sm text-gray900 font-bold">
            {employedDate}
          </p>
        </div>
      </td>
      <td className="border-t border-gray150  cursor-pointer">
        <p className=" text-center text-xs text-gray250  font-bold mr-2.5">
          {" "}
          Edit
        </p>
      </td>
    </tr>
  );
}

export default AuthorItem;
