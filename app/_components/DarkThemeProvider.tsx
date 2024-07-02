"use client";
import { ThemeProvider, createTheme } from "@mui/material";
export default function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
}
