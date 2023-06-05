import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

.App {
    height: 100vh;
    width: 100vw;
    background-color: var(--gray-1);
 
  }
  
      *{
          margin: 0;
          padding: 0;
          box-sizing: border-box;
      }
      button{
          cursor: pointer;
          border: none;
          background: transparent;
      }
      a{
          color: unset;
          text-decoration: none;
          cursor: pointer;
      }
      ul, ol, li{
          list-style: none;
      }
      h1, h2, h3, h4, h5, h6, p, a, span, li, button, input{
          font-family: 'Roboto', sans-serif;
      }
      :root {
          --color-primary: #27ae60;
          --color-secondary: #eb5757;
          --color-negative: #e60000;
          --gray-1: #333333;
          --gray-2: #828282;
          --gray-3: #e0e0e0; 
          --gray-4: #f5f5f5; 
   
  
  @keyframes animationModal {
      0% {
          opacity: 0;
          transform: rotateX(100deg);
          transform-origin: bottom;
      }
  
      100% {
          opacity: 1;
          transform: rotateX(0);
          transform-origin: bottom;
      }
  }
      }

  `;
