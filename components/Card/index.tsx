import Image from 'next/image';
import Link from 'next/link';
import { Anime } from '../../models';
import { AnimeCard, AnimeTitle, CardInfo, CardInfoNumber } from './index.style';

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
          width='94'
          height='112'
        />
        <div>
          <AnimeTitle>
            {data.title.english ? data.title.native : 'Default Title'}
          </AnimeTitle>
          <CardInfo>
            Ratings: <CardInfoNumber>{data.averageScore}</CardInfoNumber>
          </CardInfo>
          <CardInfo>
            Favorites: <CardInfoNumber>{data.favourites}</CardInfoNumber>
          </CardInfo>
        </div>
      </AnimeCard>
    </Link>
  );
};

export default Card;
