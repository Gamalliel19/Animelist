import { NextPage } from 'next';
import { ListAnimeCard } from '../styles/uielement';
import Card from '../components/Card';
import { Anime } from '../models/index';

const ListCard: NextPage<{ animes: Anime[] }> = ({ animes }) => {
  return (
    <ListAnimeCard>
      {animes.map((anime, i) => (
        <Card key={i} data={anime} />
      ))}
    </ListAnimeCard>
  );
};

export default ListCard;
