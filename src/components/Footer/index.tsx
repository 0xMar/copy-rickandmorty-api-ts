import React from 'react';
import { useStaticsQuery } from '../../generated/graphql';
import Footer from './Footer';

const FooterContainer = () => {
  const { data, error, loading } = useStaticsQuery();
  if (loading) {
    return <></>;
  }
  if (error || !data) {
    return <div>ERROR</div>;
  }
  return <Footer data={data} />;
};

export default FooterContainer;
