import { Anime } from '../models';
import {
  AppImage,
  AnimeTitle,
  AnimeType,
  AnimeCard,
} from '../styles/uielement';

type Props = {
  data: Anime;
};

const Card = ({ data }: Props) => {
  console.log(data);
  return (
    <AnimeCard>
      <AppImage src={data.coverImage.large} alt='anime' />
      <div>
        <AnimeType>{data.type}</AnimeType>
        <AnimeType>{data.countryOfOrigin}</AnimeType>
        <AnimeTitle>{data.title.english}</AnimeTitle>
        <p>Favorites : {data.favourites}</p>
      </div>
    </AnimeCard>
  );
};

export default Card;
