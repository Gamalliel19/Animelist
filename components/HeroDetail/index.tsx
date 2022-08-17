import { NextPage } from 'next';
import Image from 'next/image';
import { AnimeDetail } from '../../models/index';
import {
  Hero,
  HeroInfo,
  HeroInfoTitle,
  HeroInfoNumber,
  HeroCategory,
  HeroCategoryText,
} from './index.style';

const HeroDetail: NextPage<{ data: AnimeDetail }> = ({ data }) => {
  console.log(data);
  return (
    <Hero>
      <Image
        src={data.coverImage.large}
        alt={data.title.english}
        width='120'
        height='170'
      />
      <HeroInfo>
        <HeroInfoTitle>
          {data.title.english ? data.title.native : 'Default Title'}
        </HeroInfoTitle>
        <HeroInfoNumber>Rating: {data.averageScore}</HeroInfoNumber>
        <HeroInfoNumber>Favourites: {data.favourites}</HeroInfoNumber>
        <HeroCategory>
          {data.genres.map((genre, i) => {
            return <HeroCategoryText key={i}>{genre}</HeroCategoryText>;
          })}
        </HeroCategory>
      </HeroInfo>
    </Hero>
  );
};

export default HeroDetail;
