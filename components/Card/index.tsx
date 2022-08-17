import Image from 'next/image';
import Link from 'next/link';
import { Anime } from '../../models';
import { AnimeCard, AnimeTitle, AnimeType, AnimeTypeList } from './index.style';

type Props = {
  data: Anime;
};

const Card = ({ data }: Props) => {
  return (
    <Link href={`/${data.id}`}>
      <AnimeCard>
        <Image
          className='card-image'
          src={data.coverImage.large}
          alt={data.title.english}
          width='200'
          height='200'
        />
        <div>
          <AnimeTypeList>
            <AnimeType>{data.type}</AnimeType>
            <AnimeType>{data.countryOfOrigin}</AnimeType>
          </AnimeTypeList>
          <AnimeTitle>
            {data.title.english ? data.title.native : 'Default Title'}
          </AnimeTitle>
          <p>Favorites : {data.favourites}</p>
        </div>
      </AnimeCard>
    </Link>
  );
};

export default Card;
