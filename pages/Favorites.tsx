import { NextRouter, useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { AnimeDetail } from '../models';
import Context from '../state/Context';

const Favorites = () => {
  const [state] = useContext(Context.AppContext);
  const [collection, setCollection] = useState<number>(0);
  const router: NextRouter = useRouter();
  const listCollections = state.collections;

  console.log(state.collections);

  useEffect(() => {
    setCollection(listCollections.length);
  }, [listCollections.length, collection]);

  if (!collection) return null;

  return (
    <div>
      <button onClick={() => router.back()}>back</button>
      <h1>Favorites</h1>
      <p>You have {collection} in collections</p>
      <nav>
        {listCollections.map((coll: AnimeDetail, i: number) => (
          <ul key={i}>
            <li>{coll.title.english ?? coll.title.native}</li>
          </ul>
        ))}
      </nav>
    </div>
  );
};

export default Favorites;
