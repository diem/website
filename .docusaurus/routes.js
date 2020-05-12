
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
{
  path: '/',
  component: ComponentCreator('/'),
  exact: true,
  
},
{
  path: '/blog',
  component: ComponentCreator('/blog'),
  exact: true,
  
},
{
  path: '/blog/2019/06/18/the-path-forward',
  component: ComponentCreator('/blog/2019/06/18/the-path-forward'),
  exact: true,
  
},
{
  path: '/blog/2019/08/14/libra-bug-bounty',
  component: ComponentCreator('/blog/2019/08/14/libra-bug-bounty'),
  exact: true,
  
},
{
  path: '/blog/2019/09/12/libra-developer-spotlight',
  component: ComponentCreator('/blog/2019/09/12/libra-developer-spotlight'),
  exact: true,
  
},
{
  path: '/blog/2019/09/26/libra-bft-protocol',
  component: ComponentCreator('/blog/2019/09/26/libra-bft-protocol'),
  exact: true,
  
},
{
  path: '/blog/2019/10/02/libra-developer-update',
  component: ComponentCreator('/blog/2019/10/02/libra-developer-update'),
  exact: true,
  
},
{
  path: '/blog/2019/10/22/simplifying-payloads',
  component: ComponentCreator('/blog/2019/10/22/simplifying-payloads'),
  exact: true,
  
},
{
  path: '/blog/2019/10/29/a-guide-to-running-libra-validators',
  component: ComponentCreator('/blog/2019/10/29/a-guide-to-running-libra-validators'),
  exact: true,
  
},
{
  path: '/blog/2019/11/09/libra-consensus-protocol',
  component: ComponentCreator('/blog/2019/11/09/libra-consensus-protocol'),
  exact: true,
  
},
{
  path: '/blog/2019/11/15/5-months-and-growing-strong',
  component: ComponentCreator('/blog/2019/11/15/5-months-and-growing-strong'),
  exact: true,
  
},
{
  path: '/blog/2019/12/10/about-the-cla-process',
  component: ComponentCreator('/blog/2019/12/10/about-the-cla-process'),
  exact: true,
  
},
{
  path: '/blog/2019/12/17/libra-core-roadmap-2',
  component: ComponentCreator('/blog/2019/12/17/libra-core-roadmap-2'),
  exact: true,
  
},
{
  path: '/blog/2020/01/08/how-gas-works-on-libra-blockchain',
  component: ComponentCreator('/blog/2020/01/08/how-gas-works-on-libra-blockchain'),
  exact: true,
  
},
{
  path: '/blog/2020/01/14/reconfiguration-is-live-on-testnet',
  component: ComponentCreator('/blog/2020/01/14/reconfiguration-is-live-on-testnet'),
  exact: true,
  
},
{
  path: '/blog/2020/01/16/steering-committee-now-governs-libra-technical-development',
  component: ComponentCreator('/blog/2020/01/16/steering-committee-now-governs-libra-technical-development'),
  exact: true,
  
},
{
  path: '/blog/2020/01/23/full-node-basics',
  component: ComponentCreator('/blog/2020/01/23/full-node-basics'),
  exact: true,
  
},
{
  path: '/blog/2020/02/28/libra-core-roadmap-3',
  component: ComponentCreator('/blog/2020/02/28/libra-core-roadmap-3'),
  exact: true,
  
},
{
  path: '/blog/2020/03/06/how-to-use-the-end-to-end-tests-framework-in-move',
  component: ComponentCreator('/blog/2020/03/06/how-to-use-the-end-to-end-tests-framework-in-move'),
  exact: true,
  
},
{
  path: '/blog/page/2',
  component: ComponentCreator('/blog/page/2'),
  exact: true,
  
},
{
  path: '/form-thanks',
  component: ComponentCreator('/form-thanks'),
  exact: true,
  
},
{
  path: '/help',
  component: ComponentCreator('/help'),
  exact: true,
  
},
{
  path: '/newsletter_form',
  component: ComponentCreator('/newsletter_form'),
  exact: true,
  
},
{
  path: '/papers',
  component: ComponentCreator('/papers'),
  exact: true,
  
},
{
  path: '/partner_form',
  component: ComponentCreator('/partner_form'),
  exact: true,
  
},
{
  path: '/docs/:route',
  component: ComponentCreator('/docs/:route'),
  
  routes: [
{
  path: '/docs/README',
  component: ComponentCreator('/docs/README'),
  exact: true,
  
},
{
  path: '/docs/community/coding-guidelines',
  component: ComponentCreator('/docs/community/coding-guidelines'),
  exact: true,
  
},
{
  path: '/docs/community/contributing',
  component: ComponentCreator('/docs/community/contributing'),
  exact: true,
  
},
{
  path: '/docs/crates/admission-control',
  component: ComponentCreator('/docs/crates/admission-control'),
  exact: true,
  
},
{
  path: '/docs/crates/bytecode-verifier',
  component: ComponentCreator('/docs/crates/bytecode-verifier'),
  exact: true,
  
},
{
  path: '/docs/crates/consensus',
  component: ComponentCreator('/docs/crates/consensus'),
  exact: true,
  
},
{
  path: '/docs/crates/crypto',
  component: ComponentCreator('/docs/crates/crypto'),
  exact: true,
  
},
{
  path: '/docs/crates/execution',
  component: ComponentCreator('/docs/crates/execution'),
  exact: true,
  
},
{
  path: '/docs/crates/ir-to-bytecode',
  component: ComponentCreator('/docs/crates/ir-to-bytecode'),
  exact: true,
  
},
{
  path: '/docs/crates/mempool',
  component: ComponentCreator('/docs/crates/mempool'),
  exact: true,
  
},
{
  path: '/docs/crates/move-language',
  component: ComponentCreator('/docs/crates/move-language'),
  exact: true,
  
},
{
  path: '/docs/crates/network',
  component: ComponentCreator('/docs/crates/network'),
  exact: true,
  
},
{
  path: '/docs/crates/storage',
  component: ComponentCreator('/docs/crates/storage'),
  exact: true,
  
},
{
  path: '/docs/crates/vm',
  component: ComponentCreator('/docs/crates/vm'),
  exact: true,
  
},
{
  path: '/docs/doc1',
  component: ComponentCreator('/docs/doc1'),
  exact: true,
  
},
{
  path: '/docs/doc2',
  component: ComponentCreator('/docs/doc2'),
  exact: true,
  
},
{
  path: '/docs/doc3',
  component: ComponentCreator('/docs/doc3'),
  exact: true,
  
},
{
  path: '/docs/libra-core-overview',
  component: ComponentCreator('/docs/libra-core-overview'),
  exact: true,
  
},
{
  path: '/docs/libra-open-source-paper',
  component: ComponentCreator('/docs/libra-open-source-paper'),
  exact: true,
  
},
{
  path: '/docs/libra-protocol',
  component: ComponentCreator('/docs/libra-protocol'),
  exact: true,
  
},
{
  path: '/docs/life-of-a-transaction',
  component: ComponentCreator('/docs/life-of-a-transaction'),
  exact: true,
  
},
{
  path: '/docs/mdx',
  component: ComponentCreator('/docs/mdx'),
  exact: true,
  
},
{
  path: '/docs/move-overview',
  component: ComponentCreator('/docs/move-overview'),
  exact: true,
  
},
{
  path: '/docs/move-paper',
  component: ComponentCreator('/docs/move-paper'),
  exact: true,
  
},
{
  path: '/docs/my-first-transaction',
  component: ComponentCreator('/docs/my-first-transaction'),
  exact: true,
  
},
{
  path: '/docs/policies/code-of-conduct',
  component: ComponentCreator('/docs/policies/code-of-conduct'),
  exact: true,
  
},
{
  path: '/docs/policies/cookies-policy',
  component: ComponentCreator('/docs/policies/cookies-policy'),
  exact: true,
  
},
{
  path: '/docs/policies/privacy-policy',
  component: ComponentCreator('/docs/policies/privacy-policy'),
  exact: true,
  
},
{
  path: '/docs/policies/security',
  component: ComponentCreator('/docs/policies/security'),
  exact: true,
  
},
{
  path: '/docs/policies/terms-of-use',
  component: ComponentCreator('/docs/policies/terms-of-use'),
  exact: true,
  
},
{
  path: '/docs/reference/glossary',
  component: ComponentCreator('/docs/reference/glossary'),
  exact: true,
  
},
{
  path: '/docs/reference/libra-cli',
  component: ComponentCreator('/docs/reference/libra-cli'),
  exact: true,
  
},
{
  path: '/docs/reference/rustdoc',
  component: ComponentCreator('/docs/reference/rustdoc'),
  exact: true,
  
},
{
  path: '/docs/run-local-network',
  component: ComponentCreator('/docs/run-local-network'),
  exact: true,
  
},
{
  path: '/docs/run-move-locally',
  component: ComponentCreator('/docs/run-move-locally'),
  exact: true,
  
},
{
  path: '/docs/state-machine-replication-paper',
  component: ComponentCreator('/docs/state-machine-replication-paper'),
  exact: true,
  
},
{
  path: '/docs/the-libra-blockchain-paper',
  component: ComponentCreator('/docs/the-libra-blockchain-paper'),
  exact: true,
  
},
{
  path: '/docs/welcome-to-libra',
  component: ComponentCreator('/docs/welcome-to-libra'),
  exact: true,
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
