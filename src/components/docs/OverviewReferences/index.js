import React from 'react';
import PropTypes from 'prop-types';

import CardsWrapper from '../Cards/CardsWrapper';
import SimpleCard from '../Cards/SimpleCard';

const OverviewReferences = ({ exclude }) => (
  <CardsWrapper>
    {exclude !== 'core' &&
      <SimpleCard
        icon="img/core-contributors.svg"
        iconDark="img/core-contributors-dark.svg"
        smallerImage
        title="Core contributor overview"
        to="/docs/core/overview-v2"
      />
    }
    {exclude !== 'merchant' &&
      <SimpleCard
        icon="img/docs/merchant-solutions.svg"
        iconDark="img/docs/merchant-solutions-dark.svg"
        smallerImage
        title="Merchant solutions overview"
        to="/docs/merchant/overview"
      />
    }
    {exclude !== 'wallet' &&
      <SimpleCard
        icon="img/wallet-app.svg"
        iconDark="img/wallet-app-dark.svg"
        smallerImage
        title="Wallet developer overview"
        to="/docs/wallet-app/overview"
      />
    }
    {exclude !== 'move' && 
      <SimpleCard
        icon="img/move.svg"
        iconDark="img/move-dark.svg"
        smallerImage
        title="Move overview"
        to="/docs/move/overview-v2"
      />
    }
    {exclude !== 'node' &&
      <SimpleCard
        icon="img/node-operators.svg"
        iconDark="img/node-operators-dark.svg"
        smallerImage
        title="Node overview"
        to="/docs/node/overview"
      />
    }
  </CardsWrapper>
);


OverviewReferences.propTypes = {
  exclude: PropTypes.oneOf(['core', 'merchant', 'node', 'wallet', 'move']),
};

export default OverviewReferences;
