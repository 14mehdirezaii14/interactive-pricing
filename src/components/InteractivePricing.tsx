import { useState } from "react";
import pricingData from "../data/pricingTiers";
import PricingSlider from "./PricingSlider";
import BillingToggle from "./BillingToggle";
import PriceDisplay from "./PriceDisplay";
import usePricing from "../hooks/usePricing";

export default function InteractivePricing() {
  const {
    sliderValue,
    yearlyBilling,
    setSliderValue,
    finalPrice,
    setYearlyBilling,
  } = usePricing();

  return (
    <div className="max-w-md mx-auto px-1 py-6 md:p-6 bg-white rounded-2xl shadow-md text-center">
      <div className="text-sm text-textLight font-medium tracking-wide mb-6">
        {pricingData[sliderValue].views} PAGEVIEWS
      </div>

      <PricingSlider value={sliderValue} onChange={setSliderValue} />

      <PriceDisplay isYearlyBilling={yearlyBilling} price={finalPrice} />

      <BillingToggle
        yearly={yearlyBilling}
        onToggle={() => setYearlyBilling(!yearlyBilling)}
      />

      <div className="border-t border-gray-200 my-6 pt-6 text-sm space-y-2 text-textLight">
        <div className="flex items-center justify-center gap-2">
          <span className="text-success">✔</span>
          <span>Unlimited websites</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <span className="text-success">✔</span>
          <span>100% data ownership</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <span className="text-success">✔</span>
          <span>Email reports</span>
        </div>
      </div>

      <button className="bg-cta text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-80 transition">
        Start my trial
      </button>
    </div>
  );
}
