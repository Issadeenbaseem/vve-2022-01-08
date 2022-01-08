import React, { useState } from "react";
import ReactTooltip from "react-tooltip";


import MapChart from "./MapChart";

export default function App() {
  const [content, setContent] = useState("");
  return (
    <div>

      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}
