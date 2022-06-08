import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};


let blackColor = getComputedStyle(document.documentElement)
.getPropertyValue('--black-color');
let whiteColor = getComputedStyle(document.documentElement)
.getPropertyValue('--white-color');
let secondary= getComputedStyle(document.documentElement)
.getPropertyValue('--secondary-color');
let secondaryLightColor = getComputedStyle(document.documentElement)
.getPropertyValue('--secondary-light-color');
let ternary = getComputedStyle(document.documentElement)
.getPropertyValue('--ternary-color');


const Logo = (props) => (
  <svg
    width={225}
    height={100}
    viewBox="0 0 24.559 14.026"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <filter
        style={{
          colorInterpolationFilters: "sRGB",
        }}
        id="b"
        x={-0.257}
        y={-0.508}
        width={1.651}
        height={1.841}
      >
        <feFlood floodOpacity={0.498} floodColor="#000" result="flood" />
        <feComposite
          in="flood"
          in2="SourceGraphic"
          operator="in"
          result="composite1"
        />
        <feGaussianBlur in="composite1" stdDeviation={2.8} result="blur" />
        <feOffset dx={3.6} dy={-3.5} result="offset" />
        <feComposite in="SourceGraphic" in2="offset" result="composite2" />
      </filter>
      <filter
        style={{
          colorInterpolationFilters: "sRGB",
        }}
        id="c"
        x={-0.438}
        y={-0.779}
        width={2.111}
        height={2.292}
      >
        <feFlood floodOpacity={0.498} floodColor="#000" result="flood" />
        <feComposite
          in="flood"
          in2="SourceGraphic"
          operator="in"
          result="composite1"
        />
        <feGaussianBlur in="composite1" stdDeviation={2.8} result="blur" />
        <feOffset dx={3.6} dy={-3.5} result="offset" />
        <feComposite in="SourceGraphic" in2="offset" result="composite2" />
      </filter>
      <path id="a" d="M286.681-515.784h341.94v256.565h-341.94z" />
      <path id="d" d="M224.455 99.762h850.373v125.712H224.455z" />
    </defs>
    <path
      style={{
        fill: "none",
        stroke: "#e6e6e6",
        strokeWidth: 4.99999,
        strokeLinecap: "round",
        paintOrder: "stroke fill markers",
      }}
      d="M62.07 242.753h2.59v12.78h-2.59z"
      transform="matrix(.17597 0 0 .16454 -.152 -29.067)"
    />
    <path
      style={{
        fill: "#000",
        fillOpacity: 1,
        stroke: "#e6e6e6",
        strokeWidth: 1.2786,
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeMiterlimit: 4,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
      d="m58.89 257.382-3.788.001-24.828 3.54 2.652-2.374 17.701-3.2 4.542-.063 3.773-.008zM67.86 257.422l3.788.001 24.828 3.54-2.652-2.374-17.702-3.2-4.541-.063-3.773-.008z"
      transform="matrix(.17597 0 0 .16454 -.152 -29.067)"
    />
    <path
      style={{
        fill: "none",
        stroke: "#e6e6e6",
        strokeWidth: 5,
        strokeLinecap: "round",
        paintOrder: "stroke fill markers",
      }}
      d="M3.362 179.151h119.172v58.685H3.362Z"
      transform="matrix(.17597 0 0 .16454 -.152 -29.067)"
    />
    <path
      style={{
        fill: "#000",
        stroke: "#000",
        strokeLinecap: "round",
        paintOrder: "stroke fill markers",
      }}
      d="M6.074 181.756h113.748v53.474H6.074Z"
      transform="matrix(.17597 0 0 .16454 -.152 -29.067)"
    />
    <path
      style={{
        fill: "#e6e6e6",
        stroke: "#000",
        strokeWidth: 1.06445,
        strokeLinecap: "round",
        paintOrder: "stroke fill markers",
      }}
      d="M152.271 116.82h18.934a4.215 4.215 0 0 1 4.225 4.225v50.194a4.215 4.215 0 0 1-4.225 4.225h-18.934a4.215 4.215 0 0 1-4.224-4.225v-50.194a4.215 4.215 0 0 1 4.224-4.224z"
      transform="matrix(.17597 0 0 .16454 -6.571 -17.81)"
    />
    <path
      d="M151.307 176.315c-1.502-.155-2.632-.799-3.275-1.868-.241-.402-.461-1.039-.573-1.66-.086-.478-.092-2.082-.09-26.595.001-24.726.006-26.112.095-26.581.117-.62.201-.876.462-1.408.489-.997 1.499-1.75 2.693-2.006.822-.176 2-.193 11.925-.175 10.429.02 9.797.005 10.76.243.257.064.82.307 1.057.457.914.577 1.543 1.526 1.786 2.697.081.39.09 2.431.106 26.509.013 19.334.002 26.215-.042 26.584-.09.74-.24 1.247-.517 1.746a3.808 3.808 0 0 1-2.361 1.863c-.917.254-.918.254-11.58.247-5.498-.004-10.199-.028-10.446-.053zm21.537-.936c1.04-.28 1.837-.947 2.265-1.891.335-.738.31 1.424.307-26.212 0-13.868-.022-25.738-.048-26.377-.05-1.262-.12-1.64-.425-2.273-.297-.618-1.008-1.23-1.665-1.434-.768-.238-.78-.239-3.052-.268-1.213-.016-2.314-.012-2.446.008-.312.046-.386.162-.428.665-.062.758-.283 1.157-.812 1.468l-.242.142-4.282.016c-2.875.01-4.37-.003-4.548-.041-.678-.144-1.096-.678-1.16-1.48-.038-.49-.116-.663-.335-.746-.091-.035-.965-.046-2.443-.032-2.588.024-2.708.038-3.483.408-1.048.5-1.62 1.422-1.765 2.84-.055.542-.069 5.759-.069 26.628v25.954l.15.387c.422 1.097 1.107 1.783 2.16 2.168l.387.141 4.971.03c2.734.016 7.576.026 10.76.02 5.714-.008 5.797-.01 6.203-.12zm-14.958-57.497c.108-.108.105-.145-.018-.257-.154-.14-.344-.09-.365.096-.027.232.212.332.384.16z"
      fill="#000000"
      style={{
        strokeWidth: 0.264583,
      }}
      transform="matrix(.17597 0 0 .16454 -6.571 -17.81)"
    />
    <g
      aria-label="/&gt;"
      style={{
        fontSize: "24.5041px",
        lineHeight: 1.25,
        wordSpacing: 0,
        strokeWidth: 0.612604,
        filter: "url(#b)",
      }}
      transform="matrix(.09716 0 0 .09085 7.223 3.274)"
    >
      <path d="M145.272 11.357h2.034l-6.221 20.137h-2.034zM149.903 17.16v-2.177l15.339 5.563v1.987l-15.34 5.563V25.92l12.325-4.368z" />
    </g>
    <path
      d="m-27.887 16.436-12.348 4.391 12.348 4.368v2.177l-15.339-5.564v-1.986l15.34-5.563z" fill="#ffffff"
      aria-label="&lt;"
      style={{
        fontSize: "24.5041px",
        lineHeight: 1.25,
        wordSpacing: 0,
        strokeWidth: 0.612604,
        filter: "url(#c)",
      }}
      transform="matrix(.09716 0 0 .09085 5.726 3.274)"
    />
    <g
      aria-label="Paax.agency"
      transform="matrix(.02127 0 0 .03187 -.906 -.085)"
      style={{
        zIndex:-1,
        color:"#000",
        fontSize: "93.3333px",
        lineHeight: 1.25,
        fontFamily: "Wallpoet",
        InkscapeFontSpecification: "'Wallpoet, Normal'",
        whiteSpace: "pre",
        
       
      }}
    >
      <path d="M233.788 132.838h30.24v10.547h-18.106v11.013h18.106v10.92h-18.106v21.187h-12.134zm64.68 26.134v-19.694l-10.92-6.44h-19.32v10.547h18.107v11.013h-18.107v10.92h19.32zM307.615 168.305l10.64-6.44h15.307v7.187h-14.094v7.653h14.094v9.893h-15.307l-10.64-6.44zm0-9.893v-6.44l10.64-6.534h15.307v8.774h-14.094v4.2zm56-6.44-10.64-6.534h-15.307v8.774h14.094v7.653h-14.094v7.187h14.094v7.653h-13.72v9.893h25.573zM379.481 168.305l10.64-6.44h15.307v7.187h-14.093v7.653h14.093v9.893h-15.307l-10.64-6.44zm0-9.893v-6.44l10.64-6.534h15.307v8.774h-14.093v4.2zm56-6.44-10.64-6.534h-15.306v8.774h14.093v7.653h-14.093v7.187h14.093v7.653h-13.72v9.893h25.573zM477.108 157.198l12.6-11.853 13.067 3.267-20.254 16.146 20.254 18.294-13.067 3.453-12.6-12.88zm-4.48 0-13.16-11.853-12.787 3.267 20.254 16.146-20.254 18.294 12.787 3.453 13.16-12.88zM513.041 173.625h12.88v12.88h-12.88zM540.854 168.305l10.64-6.44h15.307v7.187h-14.093v7.653H566.8v9.893h-15.307l-10.64-6.44zm0-9.893v-6.44l10.64-6.534h15.307v8.774h-14.093v4.2zm56-6.44-10.64-6.534h-15.306v8.774H585v7.653h-14.093v7.187H585v7.653h-13.72v9.893h25.573zM606 190.705v7.56l10.92 6.44h14.748v-9.8H618.04v-4.2zm0-38.827 10.92-6.44h14.748v8.96h-13.814v19.32h13.814v7.56H616.92L606 174.745zm56.094-6.44h-25.76v8.96h13.907v19.32h-13.907v7.56h13.907v13.627h-13.907v9.8h14.84l10.92-6.44zM727.614 162.518l-11.013 6.44h-14.934v-7.186h14.094v-7.654h-14.094v-8.773h14.934l11.013 6.533zm0 11.014v6.533l-11.013 6.44h-14.934v-9.893h13.72v-3.08zm-56.373 6.533 11.013 6.44h14.84v-9.893h-14.093v-7.654h14.093v-7.186h-14.093v-7.654h14.093v-8.773h-14.84l-11.013 6.533zM744.414 145.438h11.853v4.014l13.814-4.014v8.774h-13.814v32.2h-11.853zm55.907 6.44-11.014-6.44h-14.746v8.774h14.093v32.2h11.667zM816.187 151.785l10.64-6.44h15.307v8.773h-14.093v22.494h13.72v9.893h-14.934l-10.64-6.44zm56 6.533v-6.533l-10.64-6.44h-15.213v8.773h14.093v4.2zm0 15.214v6.533l-10.64 6.44h-15.213v-9.893h14.093v-3.08zM881.334 145.625h11.76v28h14v7.467h-15.027l-10.733-6.44zm11.76 45.08v4.293h14v9.707h-15.027l-10.733-6.44v-7.56zm44.053-45.08v52.64l-11.76 6.44h-14v-9.707h14v-13.906h-14v-7.467h14v-28z" fill="#ffffff" />
    </g>
  </svg>
)






const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 1}}
      className="app__header-info"
    >
            
        <div className="tag-cmp app__flex">
          <p className="cta-text">PARLONS ENSEMBLE DE VOS PROJETS</p>
          
        </div>
      <div  className="cta-button"><a href="#contact">CONTACTEZ NOUS</a></div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 2.5, delayChildren: 2.5 }}
      className="app__header-img"
    >
      
      <div className="background">

        <div className="animation_container">
            <svg className="circle" width="366" height="366" viewBox="0 0 366 366" version="1.1" id="svg1484"
                
                >

                <defs id="defs1488" />
                <circle stroke="#fb7a17" opacity=".641" strokeWidth="3" cx="183" cy="183" r="189" fill="none"
                    fillRule="evenodd" strokeDasharray="96.2501, 7.40386, 14.8078,20" id="circle1482"
                    style={{stroke: "#fb7a17" , "strokeOpacity":1}} />
            </svg>

            <svg className="circle" width="366" height="366" viewBox="0 0 366 366" version="1.1" id="svg1484"
                >

                <defs id="defs1488" />
                <circle stroke="#fb7a17" opacity=".241" strokeWidth="3" cx="183" cy="183" r="183" fill="none"
                    fillRule="evenodd" strokeDasharray="96.2501, 7.40386, 14.8078,20" id="circle1482"
                    style={{stroke:"#fb7a17","strokeOpacity":0.52549022}}/>
            </svg>

            <svg className="circle" width="366" height="366" viewBox="0 0 96.837448 96.837511" version="1.1" id="svg1019"
                >

                <defs id="defs1016" />
                <g id="layer1" transform="translate(-76.147226,-19.954467)">
                    <ellipse
                        style={{opacity:0.70449,fill:"none","fillOpacity":1,stroke:"#fb7a17",strokeWidth:2.07087,"strokeMiterlimit":4,strokeDasharray:[29.8336, 10.9068, 13.858],"strokeOpacity":0.52376342}}
                        id="path2821" cx="102.4044" cy="99.376892" rx="47.492195" ry="47.250072"
                        transform="matrix(0.96310807,-0.26911494,0.26102082,0.96533317,0,0)" />
                </g>
            </svg>

            <svg className="circle" width="366" height="366" viewBox="0 0 96.837505 96.837503" version="1.1" id="svg1019"
                >

                <defs id="defs1016" />
                <path id="path2821"
                    style={{opacity:0.471847,fill:"none",stroke:"#fb7a17",strokeWidth:1.00013,"strokeMiterlimit":4,strokeDasharray:"none","strokeOpacity":1}}
                    d="M 95.800991,48.418845 A 47.458729,47.382084 0 0 1 48.342261,95.800927 47.458729,47.382084 0 0 1 0.883535,48.418845 47.458729,47.382084 0 0 1 48.342261,1.036761 47.458729,47.382084 0 0 1 95.800991,48.418845 Z" />
            </svg>
            <svg className="circle" width="366" height="366" viewBox="0 0 366 366" version="1.1" id="svg1484"
               >

                <defs id="defs1488" />
                <circle stroke="#ffce1d" strokeWidth="3" cx="183" cy="183" r="160" fill="none" fillRule="evenodd"
                    opacity=".441" strokeDasharray="26.2501, 7.40386, 114.8078" id="circle1482"
                    style={{stroke:"#ffce1d","strokeOpacity":1}} />
            </svg>
            <svg className="circle" width="366" height="366" viewBox="0 0 366 366" version="1.1" id="svg1484"
                >
                <defs id="defs1488" />
                <circle stroke="#fb7a17" opacity=".641" strokeWidth="3" cx="183" cy="183" r="160" fill="none"
                    fillRule="evenodd" strokeDasharray="96.2501, 7.40386, 14.8078" id="circle1482" />
            </svg>
            <svg className="circle" width="366" height="366" viewBox="0 0 366 366" version="1.1" id="svg1484"
                >

                <defs id="defs1488" />
                <circle stroke="#ffce1d" strokeWidth="10" cx="183" cy="183" r="150" fill="none" fillRule="evenodd"
                    opacity=".441" strokeDasharray="3, 2, 204" id="circle1482"
                    style={{stroke:"#ffce1d","strokeOpacity":0.52549022}} />
            </svg>
            <svg className="circle" width="366" height="366" viewBox="0 0 366 366" version="1.1" id="svg1484"
                >
                <defs id="defs1488" />
                <circle stroke="#ffce1d" strokeWidth="12" cx="183" cy="183" r="150" fill="none" fillRule="evenodd"
                    opacity=".641" strokeDasharray="30, 2, 84,30" id="circle1482" />
            </svg>

            <svg className="circle" width="366" height="366" viewBox="0 0 366 366" version="1.1" id="svg1484"
                >
                <defs id="defs1488" />
                <circle stroke="#ffce1d" strokeWidth="3" cx="183" cy="183" r="138" fill="none" fillRule="evenodd"
                    opacity=".441" strokeDasharray="36, 8, 1158" id="circle1482"
                    style={{stroke:"#ffce1d","strokeOpacity":1}} />
            </svg>

            <svg className="circle" width="366" height="366" viewBox="0 0 366 366" version="1.1" id="svg1484"
                >
                <defs id="defs1488" />
                <circle stroke="#fb7a17" opacity=".641" strokeWidth="4" cx="183" cy="183" r="138" fill="none"
                    fillRule="evenodd" strokeDasharray="90, 7, 15" id="circle1482" />
            </svg>
            <Logo className="moon"/>
        </div>
    </div>
      
    </motion.div>

   
  </div>
);

export default AppWrap(Header, 'acceuil');
