import { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
    colors: {
        background: "#1C1C21",
        primary: "#FF007E",
        textPrimary: "#fff",
        textSecondary: "#888"
    },
    fonts: ["sans-serif", "Roboto"],
    fontSizes: {
        small: "1.5em",
        medium: "2em",
        large: "3em"
    },
    borderRadius: '10px',
    sizes: {
      mobile: '360',
      tablet: '768'
    }
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    overflow: hidden;

    @media only screen and (max-width: 768px) {
      overflow: auto;
    }
  }
`;

const Theme = ({ children }:{children: JSX.Element}) => (
    <ThemeProvider theme= { theme } ><GlobalStyle/> { children } </ThemeProvider>
);

export { Theme };