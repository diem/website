import React from 'react';
import CodeBlock from '../NativeCodeBlock';

const Wrapper = ({isWithinTab, ...props}) => {
  if (isWithinTab) {
    return <CodeBlock {...props} />
  }
  
  return (
    <div className="snippet-container">
      <div className="snippet-header" />
      <CodeBlock {...props} />
    </div>
  );
};

export default Wrapper;
