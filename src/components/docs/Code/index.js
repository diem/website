import React, {useEffect, useRef, useState} from "react";
import Clipboard from 'clipboard';
import Highlight, { defaultProps } from "prism-react-renderer";
import darkCodeTheme from "prism-react-renderer/themes/paleNight";
import lightCodeTheme from "prism-react-renderer/themes/github";
import PropTypes from 'prop-types';

import useThemeContext from '@theme/hooks/useThemeContext';

import WithBackgroundImage from 'components/WithBackgroundImage';

import classnames from 'classnames';
import styles from './styles.module.css';

const LINE_CONTENT_CLASS = 'line-content';

const getUniqueID = (() => {
  let id = 0;
  return () => id++;
})();

const handleCopyCode = (setShowCopied) => {
  window.getSelection().empty();
  setShowCopied(true);

  setTimeout(() => setShowCopied(false), 2000);
};

const Header = ({ snippetID, target }) => {
  const [showCopied, setShowCopied] = useState(false);
  const button = useRef(null);

  useEffect(() => {
    let clipboard;

    if (button.current) {
      clipboard = new Clipboard(button.current, {
        text: () =>
          Array.from(document.querySelectorAll(`#${snippetID} .${LINE_CONTENT_CLASS}`))
            .map(({textContent}) => `${textContent}\n`)
            .join(''),
      });
    }

    return () => {
      if (clipboard) {
        clipboard.destroy();
      }
    };
  }, [button.current, target.current]);

  return (
    <div className={styles.header}>
      <div ref={button}>
        <WithBackgroundImage
          className={classnames(styles.copyWrapper, {
            [styles.isCopied]: showCopied,
          })}
          imageDark="img/copy-dark.svg"
          imageLight="img/copy.svg"
          onClick={() => handleCopyCode(setShowCopied)}
        >
          <button
            type="button"
            aria-label="Copy code to clipboard"
          >
            {showCopied ? 'Copied' : 'Copy'}
          </button>
        </WithBackgroundImage>
      </div>
    </div>
  );
};

const Code = ({ code, language }) => {
  const {isDarkTheme} = useThemeContext();
  const [snippetID, setSnippetID] = useState(null);
  const target = useRef(null);

  const parsedCode = code.trim();
  const theme = isDarkTheme ? darkCodeTheme : lightCodeTheme;

  useEffect(() => setSnippetID(`snippet-${getUniqueID()}`), []);

  return (
    <Highlight {...defaultProps} theme={theme} code={parsedCode} language={language}>
      {({ className,style, tokens, getLineProps, getTokenProps }) => (
        <div className={styles.root}>
          <Header snippetID={snippetID} target={target} />
          <pre className={className} id={snippetID} ref={target} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                <span className={styles.lineNumber}>{i + 1}</span>
                <span className={LINE_CONTENT_CLASS}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </span>
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  );
};

Code.propTypes = {
  code: PropTypes.string.isRequired,
  /*
   * For a list of available languages, see 
   * https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/vendor/prism/includeLangs.js
   */
  language: PropTypes.string.isRequired,
};

Code.defaultProps = {
  language: 'plaintext',
};

export default Code;
