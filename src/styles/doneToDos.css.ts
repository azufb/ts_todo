import { style } from "@vanilla-extract/css";
import { globalTheme } from "./globalTheme.css";

export const doneToDoStyle = style({
    display: 'flex',
    justifyContent: 'space-between'
});

export const doneToDoTextStyle = style({
    width: '100%',
    textAlign: 'left',
    margin: '0px'
});

export const backBtnStyle = style({
    width: '20%',
    height: '15%',
    marginLeft: globalTheme.size.xs
});