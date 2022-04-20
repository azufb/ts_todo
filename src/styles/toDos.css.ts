import { style } from "@vanilla-extract/css";
import { globalTheme } from "./globalTheme.css";

export const toDoStyle = style({
    display: 'flex',
    justifyContent: 'space-between'
});

export const toDoTextStyle = style({
    width: '100%',
    textAlign: 'left',
    margin: '0px'
});

export const doneBtnStyle = style({
    width: '25%',
    height: '10%',
    backgroundColor: globalTheme.background.success,
    marginLeft: globalTheme.size.xs
});

export const deleteBtn = style({
    width: '25%',
    height: '10%',
    marginLeft: globalTheme.size.xs
});