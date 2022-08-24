import { useQuery } from '@apollo/client';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router';
import CharacterList from '../components/CharactersList';
import DetailBox from '../components/DetailBox';
import HeroDetail from '../components/HeroDetail';
import Loading from '../components/Loading';
import { ANIME__DETAIL } from '../graphql/queries/query';
import { AnimeDetail } from '../models/index';
import React, { useContext, useEffect, useState } from 'react';
import Context from '../state/Context';
import { addToCollection } from '../state/actions';

const DetailPage: NextPage = () => {
  const router: NextRouter = useRouter();
  const [state, dispatch] = useContext(Context.AppContext);
  const { data, loading, error } = useQuery(ANIME__DETAIL, {
    variables: {
      id: router.query.id,
    },
  });
  const newData: AnimeDetail = data?.Media;

  if (loading) return <Loading />;
  if (error) return <h1>Error</h1>;

  const addToCollectionHandler = (data: AnimeDetail) => {
    if (window.confirm('Add to collection?')) {
      dispatch(addToCollection(data));
    }
  };

  return (
    <div>
      <div className='test'>
        <HeroDetail data={newData} />
        <DetailBox description={newData.description} />
        {/* Character List Map */}
        <CharacterList characters={newData.characters} />
        <button onClick={() => addToCollectionHandler(newData)}>
          Add to collection
        </button>
      </div>
    </div>
  );
};

export default DetailPage;
