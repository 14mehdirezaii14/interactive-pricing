import { type FC } from "react";

interface Props {
  yearly: boolean;
  onToggle: () => void;
}

const BillingToggle: FC<Props> = ({ yearly, onToggle }) => (
  <div className="flex items-center justify-center gap-4 mb-8 text-sm text-textLight">
    <span className={!yearly ? "text-textDark font-semibold" : ""}>
      Monthly Billing
    </span>

    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={yearly}
        onChange={onToggle}
        className="sr-only peer"
        aria-label="Toggle billing mode"
      />
      <div className="w-12 h-6 bg-toogle peer-checked:bg-accent rounded-full transition duration-300"></div>
      <div
        className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-all duration-300
        peer-checked:translate-x-6"
      ></div>
    </label>

    <span className={yearly ? "text-textDark font-semibold" : ""}>
      Yearly Billing
    </span>

    <span className="text-discounttext bg-discountbackground px-2 py-0.5 rounded-full text-xs font-medium">
      25%
    </span>
  </div>
);

export default BillingToggle;
