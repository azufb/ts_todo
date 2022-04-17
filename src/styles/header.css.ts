import { style } from "@vanilla-extract/css";
import { globalTheme } from './globalTheme.css';

export const headerStyle = style({
    backgroundColor: globalTheme.background.main,
    color: globalTheme.font.color
});