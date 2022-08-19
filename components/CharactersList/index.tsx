import { NextPage } from 'next';
import Image from 'next/image';
import { AnimeDetail } from '../../models';
import {
  CharacterImage,
  CharacterLayout,
  CharacterListContainer,
  CharacterListTitle,
  ImageInformation,
} from './index.style';

const CharacterList: NextPage<{ characters: AnimeDetail['characters'] }> = ({
  characters,
}) => {
  return (
    <CharacterListContainer>
      <CharacterListTitle>Characters</CharacterListTitle>

      <CharacterLayout>
        {characters.nodes.map((character, i) => (
          <ImageInformation key={i}>
            <CharacterImage>
              <Image
                src={character.image.large}
                alt={character.name.first}
                layout='fill'
                objectFit='fill'
              />
            </CharacterImage>
            <p>{character.name.first}</p>
          </ImageInformation>
        ))}
      </CharacterLayout>
    </CharacterListContainer>
  );
};

export default CharacterList;
