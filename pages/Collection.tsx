import { NextRouter, useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { AnimeDetail } from '../models';
import Context from '../state/Context';

const Collection = () => {
  const [state] = useContext(Context.AppContext);
  const [collection, setCollection] = useState<number>(0);
  const router: NextRouter = useRouter();

  console.log(state.collections);
  const listCollections = state.collections;

  useEffect(() => {
    setCollection(state.collections.length);
  }, []);

  return (
    <div>
      <button onClick={() => router.back()}>back</button>
      <h1>Collection</h1>
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

export default Collection;
