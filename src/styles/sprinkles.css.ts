import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { globalTheme } from "./globalTheme.css";

const responsiveStyle = defineProperties({
    conditions: {
        desktop: { '@media': 'screen and (min-width: 1024px)' },
        mobile: { '@media': 'screen and (max-width: 1023px)' }
    },
    defaultCondition: 'desktop',
    properties: {
        display: ['flex', 'block'],
        justifyContent: ['center'],
        textAlign: ['center', 'left'],
        width: ['50%', '100%'],
        paddingLeft: globalTheme.size,
        paddingRight: globalTheme.size
    }
});

export const sprinkles = createSprinkles(
    responsiveStyle
);