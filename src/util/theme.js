const primary = "#4C5B5C";
const secondary = "#FF715B";
const background = "#F9FBF2";
const divider = "#3AAFB9";

export const theme = {
  light: {
    colors: {
      primary,
      secondary,
      background,
      divider,
    },
  },
  dark: {
    colors: {
      primary: background,
      secondary: secondary,
      background: primary,
      divider: divider,
    }
  },
};
