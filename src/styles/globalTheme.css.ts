import { createGlobalTheme } from "@vanilla-extract/css";

export const globalTheme = createGlobalTheme(':root', {
    background: {
        main: '#1A1A1A',
        success: '#7FFF7F'
    },
    font: {
        color: '#FFFFFF'
    },
    size: {
        xs: '0.5rem',
        s: '1.5rem',
        m: '2.5rem'
    }
})