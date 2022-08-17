import { useQuery } from '@apollo/client';
import { NextPage } from 'next';
import Image from 'next/image';
import { NextRouter, useRouter } from 'next/router';
import HeroDetail from '../components/HeroDetail';
import { ANIME__DETAIL } from '../graphql/queries/query';
import { AnimeDetail } from '../models/index';

const DetailPage: NextPage = () => {
  const router: NextRouter = useRouter();

  const { data, loading, error } = useQuery(ANIME__DETAIL, {
    variables: {
      id: router.query.id,
    },
  });

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error</h1>;
  const newData: AnimeDetail = data?.Media;

  return (
    <div>
      <button type='button' onClick={() => router.back()}>
        Back
      </button>
      <div className='test'>
        <HeroDetail data={newData} />
      </div>
    </div>
  );
};

export default DetailPage;
