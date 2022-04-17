import { style } from "@vanilla-extract/css";
import { globalTheme } from './globalTheme.css';

export const footerStyle = style({
    marginTop: 'auto',
    backgroundColor: globalTheme.background.main,
    color: globalTheme.font.color
})