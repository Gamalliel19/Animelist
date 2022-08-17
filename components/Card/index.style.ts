import styled from '@emotion/styled';

export const AnimeCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  padding: 16px 16px;
  background: #ffffff;
  border: 2px solid #000000;
  border-radius: 12px;
  cursor: pointer;
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
  font-size: 22px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #000000;
`;

export const AnimeType = styled.span`
  padding: 6px 12px;
  border: 1px solid #4d4d4d;
  border-radius: 4px;
  font-size: 14px;
`;

export const AnimeTypeList = styled.div`
  display: flex;
  gap: 10px;
`;
