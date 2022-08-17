import { useQuery } from '@apollo/client';
import { NextPage } from 'next';
import Image from 'next/image';
import { NextRouter, useRouter } from 'next/router';
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
  console.log(newData);

  return (
    <div>
      <button type='button' onClick={() => router.back()}>
        Back
      </button>
      <Image
        src={newData.bannerImage}
        alt={newData.title.english}
        height='200'
        width='1000'
      />
      <Image
        src={newData.coverImage.large}
        alt={newData.title.english}
        width='200'
        height='200'
      />
      <h1>
        {newData.title.english} | {newData.title.native}
      </h1>
      <p>{newData.description}</p>
    </div>
  );
};

export default DetailPage;
