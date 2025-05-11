import { createRoot } from "react-dom/client";
import "./styles/index.css";
import InteractivePricingComponent from "../src/components/InteractivePricing";

createRoot(document.getElementById("root")!).render(
  <InteractivePricingComponent />
);
