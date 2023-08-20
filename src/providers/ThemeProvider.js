import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { createContext, useContext, useMemo, useState } from "react";

const themeContext = createContext({ mode: "light" });

const AppThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const toggleMode = useMemo(
    () => ({
      toggleMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      mode,
    }),
    [mode]
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                // palette values for light mode
                primary: {
                  main: "#fdd835",
                },
                secondary: {
                  main: "#333",
                },
                otherColors: {
                  grayShade: "var(--grayShade)",
                  grayShade1: "var(--grayShade1)",
                  grayShade2: "var(--grayShade2)",
                  grayShade3: "var(--grayShade3)",
                  grayShade4: "var(--grayShade4)",
                  white: "var(--white)",
                },
                typography: {
                  fontFamily: "Montserrat, sans-serif",
                },
              }
            : {
                // palette values for dark mode
                primary: {
                  main: "#fdd835",
                },
                secondary: {
                  main: "#333",
                },
                otherColors: {
                  grayShade: "#E5E5E5",
                },
                typography: {},
              }),
        },
      }),
    [mode]
  );

  return (
    <themeContext.Provider value={toggleMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </themeContext.Provider>
  );
};

const useTheme = () => useContext(themeContext);

export { useTheme, AppThemeProvider };
