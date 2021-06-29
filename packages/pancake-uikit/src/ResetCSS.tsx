import {createGlobalStyle} from "styled-components";

const ResetCSS = createGlobalStyle`
  /* prettier-ignore */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  /* prettier-ignore */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    font-size: 16px;
  }
  ol,
  ul {
    list-style: disc;
    list-style-position: inside;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  [role="button"] {
    cursor: pointer;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  * {
    font-family: 'Kanit', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Number */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
    -moz-appearance: textfield;
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({theme}) => theme.colors.textSubtle}; 
    border-radius: 8px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px ${({theme}) => theme.colors.input}; 
    border-radius: 10px;
  }

  /* Slider */ 
  input[type=range] {
    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
    width: 100%; /* Specific width is required for Firefox. */
    background: transparent; /* Otherwise white in Chrome */
  }
  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
  }
  input[type=range]:focus {
    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
  }
  input[type=range]::-ms-track {
    width: 100%;
    cursor: pointer;
    /* Hides the slider so custom styles can be added */
    background: transparent; 
    border-color: transparent;
    color: transparent;
  }  
  
  #e2Clk5AoctS1{pointer-events: all}
  #e2Clk5AoctS1 #e2Clk5AoctS5_to {animation: e2Clk5AoctS5_to__to 1200ms
        linear
        infinite normal forwards}@keyframes e2Clk5AoctS5_to__to { 0% {transform:
        translate(-1265.157516px,5714.819019px)}
        25% {transform: translate(-1265.157516px,5753.932611px)} 50% {transform:
        translate(-1265.157516px,5690.237459px)}
        75% {transform: translate(-1265.157516px,5714.819019px)} 100% {transform:
        translate(-1265.157516px,5714.819019px)}}
        #e2Clk5AoctS1:hover #e2Clk5AoctS5_ts {animation: e2Clk5AoctS5_ts__ts 1200ms linear infinite normal
        forwards}@keyframes e2Clk5AoctS5_ts__ts { 0% {transform: scale(1,1)} 25% {transform: scale(1,0.667371)} 50%
        {transform: scale(1,1.116347)} 75% {transform: scale(1,1)} 100% {transform: scale(1,1)}} #e2Clk5AoctS1:hover
        #e2Clk5AoctS22 {animation: e2Clk5AoctS22__m 1200ms linear infinite normal forwards}@keyframes e2Clk5AoctS22__m {
        0%
        {d:
        path('M208.685000,217.692000C198.385000,217.692000,198.372000,233.692000,208.685000,233.692000C218.981000,233.692000,219,217.692000,208.685000,217.692000Z')}
        25% {d:
        path('M208.685000,225.518000C198.385000,225.518000,198.372000,233.692000,208.685000,233.692000C218.981000,233.692000,219,225.518000,208.685000,225.518000Z')}
        50% {d:
        path('M208.685000,217.692000C198.385000,217.692000,198.372000,233.692000,208.685000,233.692000C218.981000,233.692000,219,217.692000,208.685000,217.692000Z')}
        100% {d:
        path('M208.685000,217.692000C198.385000,217.692000,198.372000,233.692000,208.685000,233.692000C218.981000,233.692000,219,217.692000,208.685000,217.692000Z')}}
        #e2Clk5AoctS1:hover #e2Clk5AoctS23 {animation: e2Clk5AoctS23__m 1200ms linear infinite normal
        forwards}@keyframes
        e2Clk5AoctS23__m { 0% {d:
        path('M208.685000,217.692000C198.385000,217.692000,198.372000,233.692000,208.685000,233.692000C218.981000,233.692000,219,217.692000,208.685000,217.692000Z')}
        25% {d:
        path('M208.685000,225.518000C198.385000,225.518000,198.372000,233.692000,208.685000,233.692000C218.981000,233.692000,219,225.518000,208.685000,225.518000Z')}
        50% {d:
        path('M208.685000,217.692000C198.385000,217.692000,198.372000,233.692000,208.685000,233.692000C218.981000,233.692000,219,217.692000,208.685000,217.692000Z')}
        100% {d:
        path('M208.685000,217.692000C198.385000,217.692000,198.372000,233.692000,208.685000,233.692000C218.981000,233.692000,219,217.692000,208.685000,217.692000Z')}}
        
        #eb42zvdeepyp7_tr {animation: eb42zvdeepyp7_tr__tr 2000ms linear infinite normal forwards}@keyframes eb42zvdeepyp7_tr__tr { 0% {transform: translate(2537.635254px,2537.633751px) rotate(0deg)} 50% {transform: translate(2537.635254px,2537.633751px) rotate(20deg)} 100% {transform: translate(2537.635254px,2537.633751px) rotate(0deg)} }#eb42zvdeepyp18_ts {animation: eb42zvdeepyp18_ts__ts 2000ms linear infinite normal forwards}@keyframes eb42zvdeepyp18_ts__ts { 0% {transform: translate(3761.730000px,2186.070000px) scale(1,1)} 50% {transform: translate(3761.730000px,2186.070000px) scale(1.050000,1.050000)} 100% {transform: translate(3761.730000px,2186.070000px) scale(1,1)} }#eb42zvdeepyp21_ts {animation: eb42zvdeepyp21_ts__ts 2000ms linear infinite normal forwards}@keyframes eb42zvdeepyp21_ts__ts { 0% {transform: translate(329.959127px,1623.140000px) scale(1,1)} 50% {transform: translate(329.959127px,1623.140000px) scale(1.050000,1.050000)} 100% {transform: translate(329.959127px,1623.140000px) scale(1,1)} }#eb42zvdeepyp28 {animation: eb42zvdeepyp28__tt 2000ms linear infinite normal forwards}@keyframes eb42zvdeepyp28__tt { 0% {transform: translate(1653.170000px,0.001000px) translate(0px,0px)} 35% {transform: translate(1653.170000px,0.001000px) translate(100px,100px)} 75% {transform: translate(1653.170000px,0.001000px) translate(0px,0px)} 100% {transform: translate(1653.170000px,0.001000px) translate(0px,0px)} }#eb42zvdeepyp31 {animation: eb42zvdeepyp31__tt 2000ms linear infinite normal forwards}@keyframes eb42zvdeepyp31__tt { 0% {transform: translate(564.242981px,564.243469px) translate(-564.242981px,-564.243469px)} 35% {transform: translate(564.242981px,564.243469px) translate(-664.240000px,-464.240000px)} 75% {transform: translate(564.242981px,564.243469px) translate(-564.240000px,-564.240000px)} 100% {transform: translate(564.242981px,564.243469px) translate(-564.240000px,-564.240000px)} }#eb42zvdeepyp47_ts {animation: eb42zvdeepyp47_ts__ts 2000ms linear infinite normal forwards}@keyframes eb42zvdeepyp47_ts__ts { 0% {transform: translate(2558.109516px,2950.229061px) scale(1,1)} 50% {transform: translate(2558.109516px,2950.229061px) scale(1.050000,1.050000)} 100% {transform: translate(2558.109516px,2950.229061px) scale(1,1)} }
`;

export default ResetCSS;
