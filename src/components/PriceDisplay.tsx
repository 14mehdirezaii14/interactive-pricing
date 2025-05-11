import type { FC } from "react";

interface Props {
  price: number;
  isYearlyBilling: boolean;
}

const PriceDisplay: FC<Props> = ({ price, isYearlyBilling }) => (
  <div className="text-4xl font-bold mb-6">
    ${price.toFixed(2)}{" "}
    <span className="text-sm text-gray-500">
      / {isYearlyBilling ? "year" : "month"}
    </span>
  </div>
);

export default PriceDisplay;
