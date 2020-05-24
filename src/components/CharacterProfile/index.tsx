import React, { useEffect } from 'react';
import { useCharacterProfileQuery } from '../../generated/graphql';
import CardProfile from '../CardProfile/CardProfile';
import { useSearchCharacter } from '../SearchCharacter/hooks';

const CharacterProfileContainer = () => {
  const { searchInput } = useSearchCharacter();
  const { data, error, loading, refetch } = useCharacterProfileQuery({
    variables: { name: searchInput },
  });

  useEffect(() => {
    refetch();
  }, [searchInput]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>ERROR</div>;
  }
  if (!data) {
    return <div>Select a flight from the panel</div>;
  }

  return (
    <>
      <CardProfile data={data} />
    </>
  );
};

export default CharacterProfileContainer;
