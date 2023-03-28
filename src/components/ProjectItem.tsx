import { LazyLoadImage } from "react-lazy-load-image-component";

interface ProjectItemProps {
  logoSrc: string;
  memberSrc?: any;
  company: string;
  budget: string;
  completionPercentage: string;
  progressbarValue: string;
  status?: string;
}

function ProjectItem({
  logoSrc,
  company,
  memberSrc,
  budget,
  completionPercentage,
  progressbarValue,
  status,
}: ProjectItemProps) {
  return (
    <tr>
      <td className="border-t border-gray150 py-5">
        <div className="flex gap-4">
          <LazyLoadImage src={logoSrc} alt={"company logo"} />
          <div className="text-sm font-bold text-gray900">{company}</div>
        </div>
      </td>
      {memberSrc && (
        <td className="border-t border-gray150 ">
          <LazyLoadImage src={memberSrc} alt={"members"} />
        </td>
      )}
      <td className="border-t border-gray150  ">
        <p className="text-sm font-bold text-gray900">{budget}</p>
      </td>
      {status && (
        <td className="border-t border-gray150 ">
          <p className="text-sm font-bold text-gray900">{status}</p>
        </td>
      )}
      <td className="border-t border-gray150 ">
        <div className="w-5/6">
          <div className="">
            <p className="text-xs font-bold text-cyan">
              {completionPercentage}
            </p>
          </div>
          <div className="w-full bg-gray150 rounded-full h-1 mb-4 ">
            <div
              className={`bg-cyan h-1 rounded-full ${progressbarValue}`}
            ></div>
          </div>
        </div>
      </td>
      <td className="border-t border-gray150 text-gray200 cursor-pointer">
        <ion-icon name="ellipsis-vertical-sharp"></ion-icon>
      </td>
    </tr>
  );
}

export default ProjectItem;
