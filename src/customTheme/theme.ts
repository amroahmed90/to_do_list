const THEME_COLORS = {
  darkBrown: "#593E2E",
  mediumBrown: "#8C654F",
  lightBrown: "#A68263",
  lightGrey: "#D9D9D9",
  dark: "#080A0D",
};

export const customTheme = {
  palette: {
    background: {
      navbar: THEME_COLORS.darkBrown,
      sidebar: THEME_COLORS.mediumBrown,
      mainPage: THEME_COLORS.lightBrown,
      activeTab: THEME_COLORS.lightGrey,
      dark: THEME_COLORS.dark,
    },
  },
  fontColor: {
    dark: THEME_COLORS.dark,
    light: THEME_COLORS.lightGrey,
  },
  fontSize: {
    smaller: "0.5rem",
    small: "1rem",
    medium: "1.5rem",
    large: "2rem",
  },
  fontWeight: {
    bold: "bold",
    bolder: "bolder",
  },
  padding: {
    small: "0.5rem",
    medium: "1rem",
    large: "1.5rem",
    larger: "3rem",
  },
  grids: {
    left: "15vw",
  },
};
