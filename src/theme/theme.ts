const colors = {
  background: "#edf4fa",
  lightBlue: "#93c5fd",
  mediumBlue: "#3b82f6",
  darkBlue: "#1e3a8a",
  lightGrey: "#ccc",
  mediumGrey: "#888",
  white: "#ffffff",
  textGreyPrimary: "#343a40",
  textGreySecondary: "#868e96",
};

export const theme = {
  colors,
  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    desktop: "1024px",
    "4k": "2560px",
  },
};
export type ThemeType = typeof theme;
