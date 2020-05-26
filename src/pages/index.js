/**
 * Copyright (c) The Libra Core Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const bash = (...args) => `~~~bash\n${String.raw(...args)}\n~~~`;

function HomeSplash({ siteConfig }) {
  const {baseUrl, title: siteTitle} = siteConfig;
  const docUrl = (doc) => `${baseUrl}docs/${doc}`;

  const SplashContainer = (props) => (
    <div className={styles.homeContainer}>
      <div className="homeSplashFade">
        <div className="wrapper homeWrapper">{props.children}</div>
      </div>
    </div>
  );

  const Logo = (props) => (
    <div className={styles.splashLogo}>
      <img src={props.img_src} alt="Project Logo" />
    </div>
  );

  const ProjectTitle = () => (
    <h2 className={styles.projectTitle}>
      <small>{siteConfig.tagline}</small>
    </h2>
  );

  const PromoSection = (props) => (
    <div className={styles.promoSection}>
      <div className={`${styles.promoRow} container`}>
        <div className={`${styles.pluginRowBlock} col col--3`}>
          {props.children}
         </div>
      </div>
    </div>
  );

  const Button = (props) => (
    <div className={styles.pluginWrapper}>
      <a className={styles.button} href={props.href} target={props.target}>
        {props.children}
      </a>
    </div>
  );

  return (
    <SplashContainer>
      <div className={styles.inner}>
        <Logo img_src={`${baseUrl}img/libra-header-logo-white.png`} />
        <ProjectTitle siteConfig={siteConfig} />
        <PromoSection>
          <Button href={docUrl('welcome-to-libra')}>Welcome to the Developer Site</Button>
          <Button href={docUrl('the-libra-blockchain-paper')}>
            Libra Blockchain Technical Paper
          </Button>
          <Button href={docUrl('move-overview')}>Getting Started With Move</Button>
        </PromoSection>
      </div>
    </SplashContainer>
  );
};


function Index(props) {
  const {siteConfig = {}} = useDocusaurusContext();
  const {baseUrl, title: siteTitle} = siteConfig;

  const Button = (props) => (
    <div className={styles.pluginWrapper}>
      <a className={styles.button} href={props.href} target={props.target}>
        {props.children}
      </a>
    </div>
  );

  const Block = (props) => (
    <div className="container" padding={['bottom', 'top']} id={props.id} background={props.background}>
      <div className="col col--3">
         {props.children}
      </div>
    </div>
  );

  const Description = () => (
    <Block background="light">
      {[
        {
          content: 'This is another description of how this project is useful',
          image: `${baseUrl}/img/libra_logo_lockup_white.svg`,
          imageAlign: 'right',
          title: 'Description',
        },
      ]}
    </Block>
  );


  const QuickStart = () => (
    <div
      className={styles.productShowcaseSection}
      id="quickstart"
      style={{ textAlign: 'center', marginBottom: '30px' }}
    >
      <h2>Try Libra</h2>
      <p>Currently available for macOS and Linux.</p>
      <div>
        <h4>1. Clone Libra:</h4>
        <div style={{ marginLeft: '30px' }}>
          <code>{bash`git clone https://github.com/libra/libra.git && cd libra`}</code>
        </div>
        <h4>2. Checkout the Testnet Branch:</h4>
        <div style={{ marginLeft: '30px' }}>
          <code>{bash`git checkout testnet`}</code>
        </div>
        <h4>3. Install Dependencies:</h4>
        <div style={{ marginLeft: '30px' }}>
          <code>{bash`./scripts/dev_setup.sh`}</code>
        </div>
        <h4>4. Run the CLI:</h4>
        <div style={{ marginLeft: '30px' }}>
          <code>{bash`./scripts/cli/start_cli_testnet.sh`}</code>
        </div>
        <h4>5. Run Your First Transaction:</h4>
        <div style={{ marginLeft: '30px' }}>
          <Button href={'/docs/my-first-transaction'}>My First Transaction</Button>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <HomeSplash siteConfig={siteConfig} />
      <div className={`${styles.landingPage} ${styles.mainContainer}`}>
        <QuickStart />
      </div>
    </div>
  );
};

export default Index;
