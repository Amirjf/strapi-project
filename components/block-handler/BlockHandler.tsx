import React from 'react';
import Hero from '../hero/Hero';
import TitleSection from '../title-section/TitleSection';
import Features from '../features-section/Features';

const getBlockComponent = ({ __component, ...rest }, index) => {
  let Block;
  switch (__component) {
    case 'blocks.hero':
      Block = Hero;
      break;
    case 'shared.title-section':
      Block = TitleSection;
      break;
    case 'blocks.features':
      Block = Features;
      break;
  }

  return Block ? <Block key={`index-${index}`} {...rest} /> : null;
};

const BlockHandler = ({ blocks }: any) => {
  return <div>{blocks.map(getBlockComponent)}</div>;
};

export default BlockHandler;
