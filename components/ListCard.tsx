import { NextPage } from 'next';
import { ListAnimeCard } from '../styles/uielement';
import Card from './Card';
import { useQuery } from '@apollo/client';
import { ANIME__LIST } from '../queries/query';
import { Anime } from '../models/index';

const ListCard: NextPage = () => {
  const { data, loading, error } = useQuery(ANIME__LIST);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error.</h1>;
  const datas = data.Page.media;

  return (
    <ListAnimeCard>
      {datas.map((data: Anime, i: number) => (
        <Card key={i} data={data} />
      ))}
    </ListAnimeCard>
  );
};

export default ListCard;
