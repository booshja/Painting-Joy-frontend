import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html, body, div, span, object, h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big,del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, b, u, i, dl, dt, dd, ol, ul, li,
form, label, article, aside, details,footer, header, menu, nav, output,
section, summary, time {
	margin: 0;
	padding: 0;
	border: 0;
	outline: 0;
    /* font-size changed to 62.5% so rem units use font-size of 10 for 1rem */
	font-size: 62.5%;
	font: inherit;
	vertical-align: baseline;
	background: transparent;
	box-sizing: border-box;
}

article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	min-height: 100vh;
	overflow: hidden;
}
ol, ul, nav {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
a {
	margin: 0;
	padding: 0;
	font-size: 62.5%;
	vertical-align: baseline;
	background: transparent;
	text-decoration: none;
	color: inherit;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
input, select {
	vertical-align: middle;
}
`;

export default GlobalStyle;
