import React, { useContext, useState, useEffect } from 'react';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router';
import { addCollectiopn } from '../state/actions';
import Context from '../state/Context';

const Collection: NextPage = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const router: NextRouter = useRouter();
  const [state, dispatch] = useContext(Context.AppContext);
  const collections = state.collectionNames;

  useEffect(() => {
    dispatch(addCollectiopn(inputValue));
  }, [dispatch, inputValue]);

  if (!collections) return null;

  return (
    <div>
      <button onClick={() => router.back()}>Back</button>
      <h1>Collection</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addCollectiopn(inputValue));
          setInputValue('');
        }}
      >
        <input
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type='submit'>Add Collection</button>
      </form>
      <nav>
        {collections.map((collection: any, i: number) => (
          <ul key={i}>
            <li>{collection ?? ''}</li>
          </ul>
        ))}
      </nav>
    </div>
  );
};

export default Collection;
