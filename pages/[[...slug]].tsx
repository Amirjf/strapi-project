import React from 'react';
import delve from 'dlv';
import { getDataDependencies } from '../services/api';

import { redirectToHomepage, getData } from '../utils';
import { getLocalizedParams } from '../utils/localization';
import BlockHandler from '../components/block-handler/BlockHandler';

const Universals = ({ pageData }) => {
  const blocks = delve(pageData, 'blocks');
  console.log(blocks);
  return (
    <>
      <BlockHandler blocks={pageData.blocks} />
    </>
  );
};

export async function getServerSideProps(context) {
  const { slug } = getLocalizedParams(context.query);

  try {
    const data = getData(slug);
    const res = await fetch(delve(data, 'data'));
    const json = await res.json();

    const pageData = await getDataDependencies(delve(json.data, '0'));

    return {
      props: { pageData },
    };
  } catch (error) {
    console.log(error);
  }
}

export default Universals;
