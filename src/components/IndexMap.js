import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  useZoomPan
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const width = 800;
const height = 700;

const CustomZoomableGroup = ({ children, ...restProps }) => {
  const { mapRef, transformString, position } = useZoomPan(restProps);
  return (
    <g ref={mapRef}>
      <rect width={width} height={height} fill="transparent" />
      <g transform={transformString}>{children(position)}</g>
    </g>
  );
};

const MapChart = () => {
  return (
    <ComposableMap width={width} height={height}>
     
        {position => (
          <>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map(geo => (
                  <Geography key={geo.rsmKey} geography={geo} />
                ))
              }
            </Geographies>
            <Marker coordinates={[-74, 40.7]}>
              <circle r={12 / position.k} fill="#F53" />
              
            </Marker>
            <Marker coordinates={[103.8, 1.35]}>
              <circle r={12 / position.k} fill="#F53" />
            </Marker>
          </>
        )}
     
    </ComposableMap>
  );
};

export default MapChart;
