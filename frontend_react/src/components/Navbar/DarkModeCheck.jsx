import * as React from "react";
import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ThemeProvider, ThemeContext } from '../../wrapper/ThemeContext';
import {COLORS} from '../../constants';




export const DarkCheck = () => {

    const { colorMode, setColorMode } = React.useContext(ThemeContext);
    let mode=(colorMode=="dark")?true:false
    const [isChecked, setIsChecked] = useState(false);
    const pathLength = useMotionValue(0);
    const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);
    const tickVariants = {

        pressed: () => ({ pathLength: isChecked ? 0.85 : 0.2 }),
        checked: { pathLength: 1 },
        unchecked: { pathLength: 0 }
    };

    const boxVariants = {
        hover: { scale: 1.05, strokeWidth: 60 },
        pressed: { scale: 0.95, strokeWidth: 35 },
        checked: { stroke: COLORS.secondary[colorMode] },
        unchecked: { stroke: COLORS.ternary[colorMode], strokeWidth: 50 }
    };


   



    return (

        <motion.svg
        initial={false}
        className={"check-box"}
            viewBox="0 0 440 440"
            animate={isChecked ? "unchecked" : "checked"}
            whileHover="hover"
            whileTap="pressed"
            
            
            onClick={() => {
                
                (colorMode !== "dark") ?
                    setIsChecked(false) :
                    setIsChecked(true);
                    console.log(colorMode);
                setColorMode(isChecked ? 'dark' : 'light')
            }}
        >
            <motion.path
                d="M 72 136 C 72 100.654 100.654 72 136 72 L 304 72 C 339.346 72 368 100.654 368 136 L 368 304 C 368 339.346 339.346 368 304 368 L 136 368 C 100.654 368 72 339.346 72 304 Z"
                fill="transparent"
                strokeWidth="50"
                stroke={COLORS.secondary[colorMode]}
                variants={boxVariants}
            />
            <motion.path
                d="M 0 128.666 L 128.658 257.373 L 341.808 0"
                transform="translate(54.917 88.332) rotate(-4 170.904 128.687)"
                fill="transparent"
                strokeWidth="65"
                stroke={COLORS.bg[colorMode]}
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={tickVariants}
                style={{ pathLength, opacity }}
                custom={isChecked}
            />

            <motion.path
                d="M 0 128.666 L 128.658 257.373 L 341.808 0"
                transform="translate(54.917 68.947) rotate(-4 170.904 128.687)"
                fill="transparent"
                strokeWidth="65"
                stroke={COLORS.secondary[colorMode]}
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={tickVariants}
                style={{ pathLength, opacity }}
                custom={isChecked}
            />
        </motion.svg>
    );
};
export default DarkCheck