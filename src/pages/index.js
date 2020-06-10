import React from 'react';

import {Redirect} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

function Home() {
  return <Redirect to={useBaseUrl('/welcome-to-libra-v2')} />;
}

export default Home;
