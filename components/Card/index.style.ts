import styled from '@emotion/styled';

export const AnimeCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  padding: 24px 20px;
  background: #ffffff;
  border-top: 1px solid rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

export const AnimeTitle = styled.h3`
  font-family: 'Montserrat Alternates';
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.015em;
  color: #222222;
`;

export const AnimeType = styled.span`
  padding: 6px 12px;
  border: 1px solid #4d4d4d;
  border-radius: 4px;
  font-size: 12px;
`;

export const AnimeTypeList = styled.div`
  display: flex;
  gap: 10px;
`;

export const CardInfo = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 19px;
  color: #3e3e3e;
`;

export const CardInfoNumber = styled.span`
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
`;
