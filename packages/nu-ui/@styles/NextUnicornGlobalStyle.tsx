import { css, Global } from '@emotion/react';
import normalize from './normalize';

export const NextUnicornGlobalStyle = () => (
  <Global
    styles={css`
      /* https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL */
      @font-face {
        font-family: 'Spoqa Han Sans Neo';
        font-weight: 700;
        src: local('Spoqa Han Sans Neo Bold'),
          url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.woff2')
            format('woff2'),
          url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.woff')
            format('woff'),
          url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.ttf')
            format('truetype');
      }

      @font-face {
        font-family: 'Spoqa Han Sans Neo';
        font-weight: 500;
        src: local('Spoqa Han Sans Neo Regular'),
          url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Medium.woff2')
            format('woff2'),
          url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Medium.woff')
            format('woff'),
          url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Medium.ttf')
            format('truetype');
      }

      @font-face {
        font-family: 'Spoqa Han Sans Neo';
        font-weight: 400;
        src: local('Spoqa Han Sans Neo Light'),
          url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Regular.woff2')
            format('woff2'),
          url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Regular.woff')
            format('woff'),
          url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Regular.ttf')
            format('truetype');
      }

      ${normalize}
      /* Override */
      b,
      strong {
        font-weight: bold;
      }

      html,
      body {
        width: 100%;
        height: 100%;

        overscroll-behavior-y: none;
      }

      a[href],
      input[type='submit'],
      input[type='image'],
      label[for],
      select,
      button,
      .pointer {
        cursor: pointer;
      }

      ol {
        margin: 0;
        padding: 0;
      }

      li {
        list-style: none;
      }

      ul {
        padding-left: 0;
        margin: 0;
      }

      p {
        margin: 0;
      }

      textarea:focus::placeholder {
        color: transparent;
      }

      textarea {
        resize: none;
      }

      input:focus::placeholder {
        color: transparent;
      }

      input {
        color: #656565;
      }

      input::placeholder {
        color: #b5b5b5;
      }

      * {
        -webkit-tap-highlight-color: transparent;
        outline: none;
        font-family: 'Spoqa Han Sans Neo', sans-serif !important;
        box-sizing: border-box;
      }

      *:disabled {
        cursor: not-allowed;
      }

      .mobileOnly {
        display: none;
      }

      @media (max-width: 767px) {
        .mobileOnly {
          display: unset;
        }
      }

      .tabletOnly {
        display: none !important;
      }

      .tabletBelow {
        display: none;
      }

      @media (max-width: 1023px) {
        .tabletOnly {
          display: unset;
        }

        .tabletBelow {
          display: unset;
        }
      }

      @media (max-width: 767px) {
        .tabletOnly {
          display: none;
        }
      }

      .pcOnly {
        display: unset;
      }

      @media (max-width: 1023px) {
        .pcOnly {
          display: none;
        }
      }
    `}
  />
);
