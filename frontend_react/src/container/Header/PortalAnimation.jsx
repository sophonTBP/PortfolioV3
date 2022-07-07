import './Header.scss';
import { COLORS } from '../../constants';
import { ThemeProvider, ThemeContext } from '../../wrapper/ThemeContext';
import { LogoSlideShow } from './LogoSlideShow2';
import React from 'react';



export const Portal = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);
  const themeColor = colorMode;

  return (
    <div className="background">

      <div className="animation_container">
        <svg className="circle" width="366" height="366" viewBox="0 0 366 366" version="1.1" id="svg1484"

        >

          <defs id="defs1488" />
          <circle stroke={COLORS.secondary[themeColor]} opacity="1" strokeWidth="3" cx="183" cy="183" r="189" fill="none"
            fillRule="evenodd" strokeDasharray="96.2501, 7.40386, 14.8078,20" id="circle1482"
          />
        </svg>

        <svg className="circle" width="366" height="366" viewBox="0 0 366 366" version="1.1" id="svg1484"
        >

          <defs id="defs1488" />
          <circle stroke={COLORS.secondary[themeColor]} opacity={themeColor==="dark"?".3":"1"} strokeWidth="3" cx="183" cy="183" r="183" fill="none"
            fillRule="evenodd" strokeDasharray="96.2501, 7.40386, 14.8078,20" id="circle1482"
          />
        </svg>

        <svg className="circle" width="366" height="366" viewBox="0 0 96.837448 96.837511" version="1.1" id="svg1019"
        >

          <defs id="defs1016" />
          <g id="layer1" transform="translate(-76.147226,-19.954467)">
            <ellipse
              style={{ opacity:themeColor==="dark"?"0.7":"0.8", fill: "none", "fillOpacity": 1, stroke: COLORS.secondary[themeColor], strokeWidth: 2.07087, "strokeMiterlimit": 4, strokeDasharray: [29.8336, 10.9068, 13.858], "strokeOpacity":themeColor==="dark"?".5":"0.8" }}
              id="path2821" cx="102.4044" cy="99.376892" rx="47.492195" ry="47.250072"
              transform="matrix(0.96310807,-0.26911494,0.26102082,0.96533317,0,0)" />
          </g>
        </svg>

        <svg className="circle" width="366" height="366" viewBox="0 0 96.837505 96.837503" version="1.1" id="svg1019"
        >

          <defs id="defs1016" />
          <path id="path2821"
            style={{ opacity:themeColor==="dark"?".5":"0.8", fill: "none", stroke: COLORS.secondary[themeColor], strokeWidth: 1.00013, "strokeMiterlimit": 4, strokeDasharray: "none", "strokeOpacity": 1 }}
            d="M 95.800991,48.418845 A 47.458729,47.382084 0 0 1 48.342261,95.800927 47.458729,47.382084 0 0 1 0.883535,48.418845 47.458729,47.382084 0 0 1 48.342261,1.036761 47.458729,47.382084 0 0 1 95.800991,48.418845 Z" />
        </svg>
        <svg className="circle" width="366" height="366" viewBox="0 0 366 366" version="1.1" id="svg1484"
        >

          <defs id="defs1488" />
          <circle stroke={COLORS.ternary[themeColor]} strokeWidth="3" cx="183" cy="183" r="160" fill="none" fillRule="evenodd"
            opacity=".441" strokeDasharray="26.2501, 7.40386, 114.8078" id="circle1482"
          />
        </svg>
        <svg className="circle" width="366" height="366" viewBox="0 0 366 366" version="1.1" id="svg1484"
        >
          <defs id="defs1488" />
          <circle stroke={COLORS.ternary[themeColor]} opacity=".641" strokeWidth="3" cx="183" cy="183" r="160" fill="none"
            fillRule="evenodd" strokeDasharray="96.2501, 7.40386, 14.8078" id="circle1482" />
        </svg>
        <svg className="circle" width="366" height="366" viewBox="0 0 366 366" version="1.1" id="svg1484"
        >

          <defs id="defs1488" />
          <circle stroke="#ffce1d" strokeWidth="10" cx="183" cy="183" r="150" fill="none" fillRule="evenodd"
            opacity=".441" strokeDasharray="3, 2, 204" id="circle1482"
            style={{ stroke: COLORS.ternary[themeColor], "strokeOpacity": 0.52549022 }} />
        </svg>
        <svg className="circle" width="366" height="366" viewBox="0 0 366 366" version="1.1" id="svg1484"
        >
          <defs id="defs1488" />
          <circle stroke={COLORS.ternary[themeColor]} strokeWidth="12" cx="183" cy="183" r="150" fill="none" fillRule="evenodd"
            opacity=".641" strokeDasharray="30, 2, 84,30" id="circle1482" />
        </svg>

        <svg className="circle" width="366" height="366" viewBox="0 0 366 366" version="1.1" id="svg1484"
        >
          <defs id="defs1488" />
          <circle stroke={COLORS.ternary[themeColor]} strokeWidth="3" cx="183" cy="183" r="138" fill="none" fillRule="evenodd"
            opacity=".441" strokeDasharray="36, 8, 1158" id="circle1482"
          />
        </svg>

        <svg className="circle" width="366" height="366" viewBox="0 0 366 366" version="1.1" id="svg1484"
        >
          <defs id="defs1488" />
          <circle stroke={COLORS.ternary[themeColor]} opacity=".641" strokeWidth="4" cx="183" cy="183" r="138" fill="none"
            fillRule="evenodd" strokeDasharray="90, 7, 15" id="circle1482" />
        </svg>
        <LogoSlideShow
 />
      </div>
    </div>)
}
