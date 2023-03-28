import { LazyLoadImage } from "react-lazy-load-image-component";

interface OrderItemProps {
  iconColor?: string;
  iconName?: string;
  text: string;
  title: string;
  svg?: any;
  svgAlt?: string;
}

function OrderItem({
  iconColor,
  title,
  text,
  iconName,
  svg,
  svgAlt,
}: OrderItemProps) {
  return (
    <li className="flex gap-4 -my-2">
      <div className="flex flex-col i items-center pb-1 ">
        {svg ? (
          <div className="grid">
            <LazyLoadImage src={svg} alt={svgAlt} />
          </div>
        ) : (
          <div className={`${iconColor}`}>
            <ion-icon name={iconName} size="small"></ion-icon>
          </div>
        )}

        <div className="w-0.5 bg-gray150 rounded-full mt-0.5 h-8  mb-4 "></div>
      </div>
      <div className="-my-2">
        <h3 className="text-gray900 text-lg font-bold text-sm">{title}</h3>
        <p className="text-xs text-gray200">{text}</p>
      </div>
    </li>
  );
}

export default OrderItem;
