import React from 'react';
import TabItem from '@theme-original/TabItem';

function Wrapper(props) {
  if (props.children && typeof props.children.props.children === 'string') {
    return <div>{props.children}</div>; 
  }

  const newChild = React.cloneElement(props.children.props.children, {isWithinTab: true});
  const newParent = React.cloneElement(props.children, {children: newChild});

  return <TabItem>{newParent}</TabItem>;
}

export default Wrapper;
