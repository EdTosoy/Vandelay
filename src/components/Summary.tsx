interface SummaryProps {
  text: string;
  title: string;
  iconName: string;
  increase?: boolean;
  percentageValue: string;
}

function Summary({
  title,
  text,
  increase,
  iconName,
  percentageValue,
}: SummaryProps) {
  return (
    <div
      className={`drop-shadow-sm text-gray900 w-full h-min bg-white rounded-2xl p-5  flex items-center justify-between   `}
    >
      <div>
        <p className="text-xs text-gray200 font-medium">{title}</p>
        <h2 className="text-sm font-bold ">
          {text}{" "}
          <span
            className={`text-xs font-bold  ${
              increase ? "text-green" : "text-red"
            }`}
          >
            {percentageValue}%
          </span>
        </h2>
      </div>
      <div
        className={`bg-cyan  text-white p-3  w-min h-min rounded-xl grid place-content-center`}
      >
        <ion-icon name={iconName} size="small" />
      </div>
    </div>
  );
}

export default Summary;
