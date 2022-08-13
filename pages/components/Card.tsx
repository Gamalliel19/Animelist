import type { NextPage } from 'next';
import Image from 'next/image';
import {
  AppImage,
  AnimeTitle,
  AnimeType,
  AnimeCard,
} from '../../styles/uielement';

const Card: NextPage = () => {
  return (
    <AnimeCard>
      <AppImage
        src={
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1-CXtrrkMpJ8Zq.png'
        }
        alt='anime'
      />
      <div>
        <AnimeTitle>Cowboy Bebop | カウボーイビバップ</AnimeTitle>
        <AnimeType>ANIME</AnimeType>
      </div>
    </AnimeCard>
  );
};

export default Card;
