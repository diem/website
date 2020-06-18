import React from 'react';

const DisableAdblock = ({ baseUrl }) => {
  return (
    <div id="disable-ad-block" className="modal">
      <div className="disable-adblock">
        <div className="inner">
          <img src={`${baseUrl}img/ab-icon@2x.svg`} alt="Adblock icon" />
          <h2>Please disable your ad blocker!</h2>
          <p>We get it... but it's necessary to submit the form.</p>
          <div className="buttonWrapper">
            <a id="disable-adblock-refresh" className="button secondary" href="">
              Refresh
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisableAdblock;
