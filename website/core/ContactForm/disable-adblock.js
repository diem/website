/**
 * Copyright (c) The Libra Core Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

const React = require('react');


const DisableAdblock = ({ baseUrl }) => {
  return (
    <div id="disable-ad-block" className="modal">
      <div className="disable-adblock">
        <div className="inner">
          <img src={`${baseUrl}img/ab-icon@2x.svg`} alt="Adblock icon" />
          <h2>Please disable your ad blocker!</h2>
          <p>We get it... but it's necessary to submit the form and get in on all the juicy details.</p>
          <div className="buttonWrapper">
            <a id="disable-adblock-refresh" className="button secondary" href="#">
              Refresh
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

module.exports = DisableAdblock;
