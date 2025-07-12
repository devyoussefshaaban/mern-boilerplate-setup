import { createTheme, PaletteMode } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../context";

declare module "@mui/material/styles" {
  interface Palette {
    ochre: Palette["primary"];
    salmon: Palette["primary"];
  }

  interface PaletteOptions {
    ochre?: PaletteOptions["primary"];
    salmon?: PaletteOptions["primary"];
  }
}

const useMuiTheme = () => {
  const themeMode = useSelector(
    (state: RootState) => state.common.themeMode
  ) as PaletteMode;

  const theme = createTheme({
    palette: {
      mode: themeMode,
      primary: {
        main: "rgba(52, 152, 219,1.0)",
        light: "rgba(41, 128, 185,1.0)",
        dark: "rgba(26, 188, 156,1.0)",
      },
      ochre: {
        main: "#E3D026",
        light: "#E9DB5D",
        dark: "#A29415",
        contrastText: "#242105",
      },
      salmon: {
        main: "#FF5733",
      },
    },
  });

  return {
    theme,
  };
};

export default useMuiTheme;
