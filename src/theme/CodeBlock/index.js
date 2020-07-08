import React from 'react';
import CodeBlock from '@theme-original/CodeBlock';

const Wrapper = ({isWithinTab, learnMoreLink, withinMultiStep, ...props}) => {
  if (!withinMultiStep && isWithinTab) {
    return <CodeBlock {...props} />
  }
  
  return (
    <div className="snippet-container">
      <div className="snippet-header">
        {learnMoreLink &&
          <a className="learn-more" href={learnMoreLink}>
            Learn More
          </a>
        }
      </div>
      <CodeBlock {...props} />
    </div>
  );
};

export default Wrapper;
