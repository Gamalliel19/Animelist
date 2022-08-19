import { useQuery } from '@apollo/client';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router';
import CharacterList from '../components/CharactersList';
import DetailBox from '../components/DetailBox';
import HeroDetail from '../components/HeroDetail';
import Loading from '../components/Loading';
import { ANIME__DETAIL } from '../graphql/queries/query';
import { AnimeDetail } from '../models/index';

const DetailPage: NextPage = () => {
  const router: NextRouter = useRouter();

  const { data, loading, error } = useQuery(ANIME__DETAIL, {
    variables: {
      id: router.query.id,
    },
  });

  if (loading) return <Loading />;
  if (error) return <h1>Error</h1>;
  const newData: AnimeDetail = data?.Media;
  console.log(newData);
  return (
    <div>
      <div className='test'>
        <HeroDetail data={newData} />
        <DetailBox description={newData.description} />
        {/* Character List Map */}
        <CharacterList characters={newData.characters} />
        {/* {newData.characters.nodes.map((character, i) => (
          <CharacterList
            key={i}
            name={character.name.first + ' ' + character.name.last}
            image={character.image.large}
          />
        ))} */}
      </div>
    </div>
  );
};

export default DetailPage;
