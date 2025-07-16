import { Global, css } from '@emotion/react';
import { theme } from './theme';

const style = css`
  @font-face {
    font-family: 'Logo';
    font-weight: 400;
    font-style: normal;
    src: url('https://fonts.cdnfonts.com/css/giveny-free') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 900;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Black.woff')
      format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff')
      format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 600;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff')
      format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff')
      format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
      format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 100;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Thin.woff')
      format('woff');
  }

  * {
    margin: 0;
    padding: 0;
    outline: unset;
    box-sizing: border-box;
    border: 0;
    list-style: none;
    font-style: normal;
    font-family: 'Pretendard', sans-serif;
    text-decoration: none;
    font-size: 16px;
    font-weight: 400;
    color: ${theme.color.gray[500]};
  }

  body {
    overflow-x: hidden;
  }

  #modal {
    position: fixed;
    z-index: 10000;
    width: 100vw;
    height: 100vh;
    top: 0;
  }
`;

export const GlobalStyle = () => {
  return <Global styles={style} />;
};
