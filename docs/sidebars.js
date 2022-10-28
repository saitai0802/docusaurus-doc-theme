/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure

  webDevelopmentSidebar: [
    {
      type: 'category',
      label: 'Software Development',
      items: [
        { type: 'autogenerated', dirName: 'software-development' }
      ],
    },
  ], 
  containerOrchestrationSidebar: [
    {
      type: 'category',
      label: 'Container Orchestration',
      items: [
        { type: 'autogenerated', dirName: 'container-orchestration' }
      ],
    },
  ], 
  awsSidebar: [
    {
      type: 'category',
      label: 'AWS',
      items: [
        { type: 'autogenerated', dirName: 'cloud-computing/aws' }
      ],
    },
  ],
  linuxSidebar: [
    {
      type: 'category',
      label: 'Linux',
      items: [
        { type: 'autogenerated', dirName: 'linux' }
      ],
    },
  ],
  techConceptsSideBar: [
    {
      type: 'category',
      label: 'Tech concepts',
      items: [
        { type: 'autogenerated', dirName: 'tech-concepts' }
      ],
    },
  ],
  cryptoSidebar: [
    {
      type: 'category',
      label: 'Crypto',
      items: [
        { type: 'autogenerated', dirName: 'crypto' }
      ],
    },
  ],
  other: [
    {
      type: 'category',
      label: 'Other topics',
      items: [
        { type: 'autogenerated', dirName: 'other' }
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
