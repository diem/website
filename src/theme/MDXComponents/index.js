import React from 'react';
import NativeComponents from '@theme-original/MDXComponents';
import DocComponents from 'components/docs';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

const ThemeComponents = {
  Tabs,
  TabItem,
};

export default Object.assign(NativeComponents, DocComponents, ThemeComponents);
