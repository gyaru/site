import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import oceanicNext from "prism-react-renderer/themes/oceanicNext";
import "@fontsource/overpass-mono";
import styled from "styled-components";

const Pre = styled.pre`
  padding: 18px 0 0 18px;
  font-family: "Overpass Mono";
  overflow-x: auto;
  font-size: 13px;
  line-height: 15px;
  margin: 0;
`;

export default ({ children, className }) => {
  const language = className.replace(/language-/, "") || "";
  console.log(language);

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={oceanicNext}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={{ ...style }}>
          {tokens.map((line, index) => {
            const lineProps = getLineProps({ line, key: index });
            return (
              <div key={index} {...lineProps}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            );
          })}
        </Pre>
      )}
    </Highlight>
  );
};
