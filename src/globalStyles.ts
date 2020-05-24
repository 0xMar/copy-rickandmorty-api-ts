import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: inherit;
  }
  ::after {
    box-sizing: inherit;
  }
  ::before {
    box-sizing: inherit;
  }
  ::selection {
    color: rgb(255, 152, 0);
    background: rgb(32, 35, 41) none repeat scroll 0% 0%;
  }
  html {
    font: 112.5%/1.625 -apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';
    box-sizing: border-box;
    overflow-y: scroll;
  }
  body { 
    margin: 0;
    color: hsla(0,0%,0%,0.8);
    font-family:-apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
    /* -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    -ms-font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt"; */
    & a:hover {
    color: rgb(255, 152, 0);
  }
  }
  header, main {
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
  }
  h1 {
    margin-left:0;
    margin-right:0;
    margin-top:2.4375rem;
    padding-bottom:calc(0.40625rem - 1px);
    padding-left:0;
    padding-right:0;
    padding-top:0;
    margin-bottom:1.21875rem;
    color:inherit;
    font-family:-apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';
    font-weight:800;
    text-rendering:optimizeLegibility;
    font-size:2rem;
    line-height:1.1;
    border-bottom:1px solid hsla(0,0%,0%,0.07);
  }
  h2 {
    margin-left:0;
    margin-right:0;
    margin-top:1.625rem;
    padding-bottom:calc(0.40625rem - 1px);
    padding-left:0;
    padding-right:0;
    padding-top:0;
    margin-bottom:0.40625rem;
    color:inherit;
    font-family:-apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';
    font-weight:800;
    text-rendering:optimizeLegibility;
    font-size:1.51572rem;
    line-height:1.1;
    border-bottom:1px solid hsla(0,0%,0%,0.07);
  }
  ul {
    list-style-position: outside;
    list-style-image: none;
  }
  li {
    list-style-type: none;
  }
  a {
    text-decoration: none;
  }
`;
