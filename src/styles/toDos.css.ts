import { style } from "@vanilla-extract/css";
import { globalTheme } from "./globalTheme.css";

export const doneBtnStyle = style({
    backgroundColor: globalTheme.background.success,
    marginLeft: globalTheme.size.xs
});

export const deleteBtn = style({
    marginLeft: globalTheme.size.xs
});