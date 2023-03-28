interface CardStatProps {
  iconName: string;
  title: string;
  text: string;
}
function CardStat({ iconName, text, title }: CardStatProps) {
  return (
    <div className="w-full">
      <div className=" text-gray900  bg-white rounded-2xl flex gap-3 items-center">
        <div
          className={`bg-cyan  text-white p-2  w-min h-min rounded-lg grid place-content-center`}
        >
          <ion-icon name={iconName} />
        </div>
        <h2 className="text-xs text-gray200 font-bold ">{title}</h2>
      </div>
      <h2 className=" my-2 font-semibold">{text}</h2>
      <div className="w-full bg-gray150 rounded-full h-1 mb-4 ">
        <div className="bg-cyan h-1 rounded-full w-2/3"></div>
      </div>
    </div>
  );
}

export default CardStat;
