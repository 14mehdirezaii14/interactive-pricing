import { useEffect, useState, type FC } from "react";

interface Props {
  value: number;
  onChange: (val: number) => void;
}

const PricingSlider: FC<Props> = ({ value, onChange }) => {
  const [fill, setFill] = useState("0%");

  useEffect(() => {
    const percent = (value / 4) * 100;
    setFill(`${percent}%`);
  }, [value]);

  return (
    <input
      type="range"
      min="0"
      max="4"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="
      slider-thumb-icon
        w-full h-3 appearance-none cursor-pointer rounded-full
        bg-sliderBg bg-no-repeat
        transition-all
        bg-[linear-gradient(to_right,#10D5C2_0%,#10D5C2_var(--fill),#ECF0FB_var(--fill),#ECF0FB_100%)]
        [&::-webkit-slider-thumb]:appearance-none
        [&::-webkit-slider-thumb]:h-6
        [&::-webkit-slider-thumb]:w-6
        [&::-webkit-slider-thumb]:rounded-full
        [&::-webkit-slider-thumb]:bg-white
        [&::-webkit-slider-thumb]:border-2
        [&::-webkit-slider-thumb]:border-accent
        [&::-webkit-slider-thumb]:shadow-md
        [&::-webkit-slider-thumb]:transition
      "
      style={{ "--fill": fill } as React.CSSProperties}
      aria-label="Pageviews slider"
    />
  );
};

export default PricingSlider;
