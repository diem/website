import React from 'react';

const EnableJavaScript = ({ baseUrl }) => (
  <div id="disable-ad-block" className="modal">
    <div className="disable-adblock">
      <div className="inner">
        <img src={`${baseUrl}img/ab-icon@2x.svg`} alt="Adblock icon" />
        <h2>Please enable JavaScript!</h2>
        <p>We use JavaScript to validate that you submitted a correct email address and URL.</p>
        <div className="buttonWrapper">
          <a id="disable-adblock-refresh" className="button secondary" href="#">
            Refresh
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default EnableJavaScript;
