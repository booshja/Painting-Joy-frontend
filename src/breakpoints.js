import { css } from "styled-components";

export const breakpoints = (
    cssProp = "padding",
    cssPropUnits = "px",
    values = [],
    mediaQueryType = "min-width"
) => {
    const breakpointProps = values.reduce((mediaQueries, value) => {
        const [screenBreakpoint, cssPropBreakpoint] = [
            Object.keys(value)[0],
            Object.values(value)[0],
        ];
        return (mediaQueries += `
        @media screen and (${mediaQueryType}: ${screenBreakpoint}px) {
            ${cssProp}: ${cssPropBreakpoint}${cssPropUnits};
        }
        `);
    }, "");
    return css([breakpointProps]);
};

export const breakpointValues = {
    mobileSm: 360,
    mobileLg: 414,
    tablet: 768,
    desktopSm: 1024,
    desktopMd: 1280,
    desktopLg: 1440,
};
