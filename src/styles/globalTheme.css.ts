import { createGlobalTheme } from "@vanilla-extract/css";

export const globalTheme = createGlobalTheme(':root', {
    background: {
        main: '#1A1A1A'
    },
    font: {
        color: '#FFFFFF'
    }
})