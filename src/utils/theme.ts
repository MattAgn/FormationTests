const BASE_SPACING = 8;

const colors = {
  primary: 'rgb(68,34,247)',
  primaryLight: 'rgb(199,188,252)',
  secondary: 'rgb(56,240,201)',
  red: 'rgb(202,15,15)',
  purple: 'rgb(239,236,254)',
  onBoardingBackground: 'rgb(19, 125, 160)',
  black: 'rgb(0,0,0)',
  grey: 'rgb(51,51,51)',
  greyLight: 'rgb(205,204,204)',
  white: 'rgb(255,255,255)',
  offWhite: 'rgb(245,243,254)',
  darkGreen: 'rgb(12,209,167)',
  deprecatedPrimary: {
    lightest: 'rgb(218,233,239)',
    lighter: 'rgb(87, 172, 209)',
    base: 'rgb(19, 125, 160)',
    darker: 'rgb(0,81,113)',
    darkest: 'rgb(0,31,44)',
  },
  deprecatedGrey: {
    lightest: 'rgb(236,239,241)',
    light: 'rgb(207,216,220)',
    base: 'rgb(144,164,174)',
  },
  bullet: {
    full: 'rgb(255,255,255)',
    empty: 'rgba(218,233,239,0.54)',
  },
};

export const theme = {
  colors,
  shadows: {
    overlay: {
      boxShadow: '0px 2px 8px rgba(0,31,45,0.1)',
      elevation: 13,
    },
  },
  margin: {
    x1: BASE_SPACING,
    x2: 2 * BASE_SPACING,
    x3: 3 * BASE_SPACING,
    x4: 4 * BASE_SPACING,
    x5: 5 * BASE_SPACING,
    x6: 6 * BASE_SPACING,
    x7: 7 * BASE_SPACING,
    x8: 8 * BASE_SPACING,
    x9: 9 * BASE_SPACING,
    x10: 10 * BASE_SPACING,
  },
};
