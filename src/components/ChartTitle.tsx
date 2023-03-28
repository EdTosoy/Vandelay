interface ChartTitleProps {
  title: string;
  text?: string;
  spanText?: string | any;
}

function ChartTitle({ title, text, spanText }: ChartTitleProps) {
  return (
    <div className="mb-3 mt-2 ">
      <h3 className="text-gray900 text-lg font-bold">{title}</h3>
      <p className="text-xs text-gray200">
        <span className="text-green ">{spanText}</span> {text}
      </p>
    </div>
  );
}

export default ChartTitle;
