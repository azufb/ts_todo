import { createTheme, style } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
    background: {
        alert: 'red'
    }
});

export const alertBtn = style({
    backgroundColor: vars.background.alert
});