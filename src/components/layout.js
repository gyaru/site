import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import { createGlobalStyle } from "styled-components"
import styled from "styled-components"

const GlobalStyle = createGlobalStyle`
  // prism, move this out of global?
  code[class*="language-"],
  pre[class*="language-"] {
    color: #ccc;
    background: none;
    font-family:  Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    font-weight: 500;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;

  }

  /* Code blocks */
  pre[class*="language-"] {
    padding: 1em;
    margin: .5em 0;
    overflow: auto;
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: #2b303b;
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] {
    padding: .1em;
    border-radius: .3em;
    white-space: normal;
  }

  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #999;
  }

  .token.punctuation {
    color: #ccc;
  }

  .token.tag,
  .token.attr-name,
  .token.namespace,
  .token.deleted {
    color: #e2777a;
  }

  .token.function-name {
    color: #6196cc;
  }

  .token.boolean,
  .token.number,
  .token.function {
    color: #f08d49;
  }

  .token.property,
  .token.class-name,
  .token.constant,
  .token.symbol {
    color: #f8c555;
  }

  .token.selector,
  .token.important,
  .token.atrule,
  .token.keyword,
  .token.builtin {
    color: #cc99cd;
  }

  .token.string,
  .token.char,
  .token.attr-value,
  .token.regex,
  .token.variable {
    color: #7ec699;
  }

  .token.operator,
  .token.entity,
  .token.url {
    color: #67cdcc;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .token.inserted {
    color: green;
  }
`

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Cute = styled.div`
  color: #b48ead;
  font-family: "Clear Sans, sans-serif";
  font-size: 12px;
  a {
    color: #b48ead;
    text-decoration: none;
    box-shadow: unset;
  }
  a:hover {
    text-decoration: underline;
  }
`

class Layout extends React.Component {
  render() {
    const title = "gyaru."
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(0.5),
            fontFamily: `Clear Sans, sans-serif`,
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `#b48ead`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Clear Sans, sans-serif`,
            ...scale(0.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `#b48ead`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <>
        <GlobalStyle />
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(30),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <header>{header}</header>
          <main>{children}</main>
          <Footer>
            <Cute>gyaru.</Cute>
            <Cute><a href="https://twitter.com/gyarujk">♥</a></Cute>
          </Footer>
        </div>
      </>
    )
  }
}

export default Layout
