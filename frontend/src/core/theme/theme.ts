import { MantineThemeColorsOverride } from "@mantine/core";


const theme:MantineThemeColorsOverride = {
    colorScheme: 'light',
    loader: 'bars',
    fontFamily: 'Plus Jakarta Sans Variable, sans-serif',
    fontSizes:{
        xs:'2.6em',
        sm:'0.95em'
    },
    breakpoints: {
        xs: '30em',
        sm: '48em',
        md: '64em',
        lg: '74em',
        xl: '90em',
      },
    
    colors: {
        mint: [
            '#F1F3F7',
            '#D2DCE8',
            '#4EA5FF',
            '#6EA0DF',
            '#448EEA',
            '#147DFF',
            '#1971DF',
            '#2868B7',
            '#315F98',
            '#315F98',
        ],
        cadet: [
            '#1E2433',
            '#191F31',
            '#141B2F',
            '#0F172E',
            '#0A132E',
            '#05102E',
            '#0A132E',
            '#000C2E',
            '#040D25',
            '#040D25',
        ],
    },
    primaryColor:'cadet',
    primaryShade:7,
}

export default theme;