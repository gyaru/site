import Typography from "typography"
import { MOBILE_MEDIA_QUERY } from "typography-breakpoint-constants"
import gray from 'gray-percentage'

const theme = {
  title: "gyaru",
  baseFontSize: "17px",
  baseLineHeight: 1.75,
  scaleRatio: 5 / 2,
  headerFontFamily: ["Clear Sans", "serif"],
  bodyFontFamily: ["Clear Sans", "serif"],
  bodyColor: gray(20),
  bodyBackground: "#FFF",
  headerWeight: 900,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    h1: {
      fontFamily: ["Clear Sans", "sans-serif"].join(","),
    },
    'img[alt="banner"]': {
      borderColor: '#b48ead',
      borderStyle: 'solid'
    },
    blockquote: {
      ...scale(1 / 5),
      color: gray(50),
      fontStyle: "italic",
      paddingLeft: rhythm(13 / 16),
      marginLeft: rhythm(-1),
      borderLeft: `${rhythm(3 / 16)} solid ${gray(10)}`,
      borderColor: '#b48ead'
    },
    "blockquote > :last-child": {
      marginBottom: 0,
    },
    "blockquote cite": {
      ...adjustFontSizeTo(options.baseFontSize),
      color: options.bodyColor,
      fontWeight: options.bodyWeight,
    },
    "blockquote cite:before": {
      content: '"— "',
    },
    ul: {
      listStyle: "disc",
    },
    "ul,ol": {
      marginLeft: 0,
    },
    "a.gatsby-resp-image-link": {
      boxShadow: 'none',
    },
    [MOBILE_MEDIA_QUERY]: {
      "ul,ol": {
        marginLeft: rhythm(1),
      },
      blockquote: {
        marginLeft: rhythm(-3 / 4),
        marginRight: 0,
        paddingLeft: rhythm(9 / 16),
      },
    },
    "h1,h2,h3,h4,h5,h6": {
      marginTop: rhythm(2),
      color: '#b48ead',
    },
    hr: {
      backgroundColor: '#b48ead'
    },
    h4: {
      letterSpacing: "0.140625em",
      textTransform: "uppercase",
    },
    h6: {
      fontStyle: "italic",
    },
    a: {
      boxShadow: "0 1px 0 0 currentColor",
      color: "#007acc",
      textDecoration: "none",
    },
    "a:hover,a:active": {
      boxShadow: "none",
    },
    "mark,ins": {
      background: "#007acc",
      color: "white",
      padding: `${rhythm(1 / 16)} ${rhythm(1 / 8)}`,
      textDecoration: "none",
    }
  }),
}

const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
