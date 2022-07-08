import { css } from '@emotion/react';

const global = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    font-family: 'Noto Sans KR', sans-serif;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
  }

  select,
  input,
  button,
  textarea {
    border: 0;
    outline: 0 !important;
  }

  a {
    text-decoration: none;
  }
`;

export default global;
