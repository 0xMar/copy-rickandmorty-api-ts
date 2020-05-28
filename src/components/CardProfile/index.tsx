import React from 'react';
import { useCharacterListQuery } from '../../generated/graphql';
import CardProfile from './CardProfile';
import Spinner from '../Spinner';

const CardProfileContainer: React.FC = () => {
  const { data, error, loading } = useCharacterListQuery();
  if (loading) {
    return <Spinner />;
  }
  if (error || !data) {
    return <div>ERROR</div>;
  }
  return <CardProfile data={data} />;
};
export default CardProfileContainer;
