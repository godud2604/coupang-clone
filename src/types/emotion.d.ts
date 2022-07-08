import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    blue500: string;
    blue700: string;
    red: string;
    grey: string;
    white: string;

    mq: {
      desktop: string;
      laptop: string;
      tablet: string;
      mobile: string;
    };
  }
}
