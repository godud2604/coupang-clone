const size = {
  mobile: '400px',
  tablet: '768px',
  laptop: '1023px',
  desktop: '1240px',
};

const theme = {
  blue500: '#3182f6',
  blue700: '#1b64da',
  red: '#e52528',
  grey: '#ccc',
  white: '#ffffff',

  mq: {
    desktop: `@media only screen and (min-width: ${size.desktop})`,
    laptop: `@media only screen and (min-width: ${size.laptop})`,
    tablet: `@media only screen and (min-width: ${size.tablet})`,
    mobile: `@media only screen and (min-width: ${size.mobile})`,
  },
};

export default theme;
