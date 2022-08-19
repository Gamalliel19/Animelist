import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { AnimeDetail } from '../../models/index';
import {
  Hero,
  HeroInfo,
  HeroInfoTitle,
  HeroInfoNumber,
  HeroCategory,
  HeroCategoryText,
  BackButton,
  BackDrop,
} from './index.style';

const HeroDetail: NextPage<{ data: AnimeDetail }> = ({ data }) => {
  const router = useRouter();
  return (
    <Hero>
      <BackDrop>
        <Image
          src={
            data.bannerImage
              ? data.bannerImage
              : 'https://img.freepik.com/free-vector/detailed-anime-banner-template_52683-66689.jpg?w=2000'
          }
          alt={data.title.english}
          layout='fill'
          objectFit='fill'
        />
      </BackDrop>

      <BackButton type='button' onClick={() => router.back()}>
        Back
      </BackButton>
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
