import { useState } from "react";
import pricingData from "../data/pricingTiers";

export default function usePricing() {
  const [sliderValue, setSliderValue] = useState<number>(2); // default: 100K
  const [yearlyBilling, setYearlyBilling] = useState<boolean>(false);

  const toggleBilling = () => setYearlyBilling((prev) => !prev);

  const basePrice = pricingData[sliderValue].price;
  const finalPrice = yearlyBilling ? basePrice * 0.75 : basePrice;
  const currentViews = pricingData[sliderValue].views;

  return {
    sliderValue,
    setSliderValue,
    yearlyBilling,
    toggleBilling,
    finalPrice,
    currentViews,
    setYearlyBilling
  };
}
