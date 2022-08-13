import styled from '@emotion/styled';

export const Container = styled.main`
  max-width: 1280px;
  margin: 0 auto;
`;

export const AnimeCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: #ffffff;
  border: 2px solid #000000;
  border-radius: 12px;
`;

export const AppImage = styled.img`
  width: 250px;
  height: 250px;
  background: #ffffff;
  box-shadow: 12px 12px 0px #81adc8;
  border-radius: 12px;
`;

export const AnimeTitle = styled.h3`
  font-family: 'Montserrat Alternates';
  font-style: normal;
  font-weight: 700;
  font-size: 22.65px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #000000;
`;

export const AnimeType = styled.span`
  padding: 6px 12px;
  width: 51px;
  height: 31px;
  border: 1px solid #4d4d4d;
  border-radius: 4px;
`;
