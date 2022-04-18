import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";

const responsiveStyle = defineProperties({
    conditions: {
        desktop: { '@media': 'screen and (min-width: 1024px)' },
        tablet: { '@media': 'screen and (min-width: 768px)' },
        mobile: {}
    },
    defaultCondition: 'desktop',
    properties: {
        display: ['flex', 'block'],
        justifyContent: ['center'],
    }
});

export const sprinkles = createSprinkles(
    responsiveStyle
);