import { style } from "@vanilla-extract/css";
import { globalTheme } from "./globalTheme.css";

export const formStyle = style({
    textAlign: 'center',
    paddingTop: '2rem',
    paddingBottom: '2rem',
    paddingLeft: '2rem',
    paddingRight: '2rem'
});

export const submitBtn = style({
    marginLeft: globalTheme.size.xs
});