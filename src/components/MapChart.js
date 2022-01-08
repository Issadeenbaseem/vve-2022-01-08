import React, { memo } from "react";
import {
  ComposableMap,
  
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";


const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

  const width = 800;
const height = 600;

const MapChart = ({ setTooltipContent }) => {
  return (
    <ComposableMap data-tip="" width={width} height={height}>
     
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geography => (
              <Geography key={geography.rsmKey} geography={geography} />
            ))
          }
        </Geographies>
        <Marker
          coordinates={[77.7718,17.8731 ]}
          onMouseEnter={() => {
            setTooltipContent("Srilanka");
          }}
          onMouseLeave={() => {
            setTooltipContent("");
          }}
        >
           <svg
            width="27"
            height="36"
            viewBox="0 0 27 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.5182 0C20.9314 0 27.0363 5.904 27.0363 13.392C27.0363 19.44 22.9664 23.112 19.5141 27.828L13.5182 36L7.41319 27.828C3.96097 23.076 0 19.404 0 13.392C0 5.904 5.95962 0 13.5182 0ZM13.5182 7.344C16.8614 7.344 19.4778 10.08 19.4778 13.392C19.4778 16.704 16.8614 19.296 13.5182 19.296C10.175 19.296 7.41319 16.704 7.41319 13.392C7.41319 10.08 10.175 7.344 13.5182 7.344Z"
              fill="#2786bc
              "
            />
          </svg>
        </Marker>
        <Marker
          coordinates={[70.2207,8.2028 ]}
          onMouseEnter={() => {
            setTooltipContent("Maldives");
          }}
          onMouseLeave={() => {
            setTooltipContent("");
          }}
        >
           <svg
            width="27"
            height="36"
            viewBox="0 0 27 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.5182 0C20.9314 0 27.0363 5.904 27.0363 13.392C27.0363 19.44 22.9664 23.112 19.5141 27.828L13.5182 36L7.41319 27.828C3.96097 23.076 0 19.404 0 13.392C0 5.904 5.95962 0 13.5182 0ZM13.5182 7.344C16.8614 7.344 19.4778 10.08 19.4778 13.392C19.4778 16.704 16.8614 19.296 13.5182 19.296C10.175 19.296 7.41319 16.704 7.41319 13.392C7.41319 10.08 10.175 7.344 13.5182 7.344Z"
              fill="#2786bc
              "
            />
          </svg>
        </Marker>
       <Marker
          coordinates={[95.3563,33.6850 ]}
          onMouseEnter={() => {
            setTooltipContent("Bangladesh");
           }}
          onMouseLeave={() => {
            setTooltipContent("");
          }}
        >
           <svg
            width="27"
            height="36"
            viewBox="0 0 27 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.5182 0C20.9314 0 27.0363 5.904 27.0363 13.392C27.0363 19.44 22.9664 23.112 19.5141 27.828L13.5182 36L7.41319 27.828C3.96097 23.076 0 19.404 0 13.392C0 5.904 5.95962 0 13.5182 0ZM13.5182 7.344C16.8614 7.344 19.4778 10.08 19.4778 13.392C19.4778 16.704 16.8614 19.296 13.5182 19.296C10.175 19.296 7.41319 16.704 7.41319 13.392C7.41319 10.08 10.175 7.344 13.5182 7.344Z"
              fill="#2786bc
              "
            />
          </svg>
        </Marker>
        <Marker
          coordinates={[15.7832,10.5085 ]}
          onMouseEnter={() => {
            setTooltipContent("Africa");
           }}
          onMouseLeave={() => {
            setTooltipContent("");
          }}
        >
           <svg
            width="27"
            height="36"
            viewBox="0 0 27 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.5182 0C20.9314 0 27.0363 5.904 27.0363 13.392C27.0363 19.44 22.9664 23.112 19.5141 27.828L13.5182 36L7.41319 27.828C3.96097 23.076 0 19.404 0 13.392C0 5.904 5.95962 0 13.5182 0ZM13.5182 7.344C16.8614 7.344 19.4778 10.08 19.4778 13.392C19.4778 16.704 16.8614 19.296 13.5182 19.296C10.175 19.296 7.41319 16.704 7.41319 13.392C7.41319 10.08 10.175 7.344 13.5182 7.344Z"
              fill="#2786bc
              "
            />
          </svg>
        </Marker>
        <Marker
          coordinates={[40.2985,30.5510 ]}
          onMouseEnter={() => {
            setTooltipContent("Middle East");
           }}
          onMouseLeave={() => {
            setTooltipContent("");
          }}
        >
           <svg
            width="27"
            height="36"
            viewBox="0 0 27 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.5182 0C20.9314 0 27.0363 5.904 27.0363 13.392C27.0363 19.44 22.9664 23.112 19.5141 27.828L13.5182 36L7.41319 27.828C3.96097 23.076 0 19.404 0 13.392C0 5.904 5.95962 0 13.5182 0ZM13.5182 7.344C16.8614 7.344 19.4778 10.08 19.4778 13.392C19.4778 16.704 16.8614 19.296 13.5182 19.296C10.175 19.296 7.41319 16.704 7.41319 13.392C7.41319 10.08 10.175 7.344 13.5182 7.344Z"
              fill="#2786bc
              "
            />
          </svg>
        </Marker>

    </ComposableMap>
  );
};

export default memo(MapChart);
