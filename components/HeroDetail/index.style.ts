import styled from '@emotion/styled';

export const Hero = styled.div`
  padding: 60px 20px 40px 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
`;

export const BackButton = styled.button`
  position: absolute;
  top: 14px;
  left: 20px;
`;

export const HeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const HeroInfoTitle = styled.h1`
  font-weight: 700;
  font-size: 18px;
  line-height: 116.69%;
  letter-spacing: 0.005em;
  color: #fff;
  z-index: 200;
`;

export const HeroInfoNumber = styled.span`
  font-weight: 400;
  font-size: 13px;
  line-height: 116.69%;
  letter-spacing: 0.005em;
  color: #fff;
  z-index: 200;
`;

export const HeroCategory = styled.div`
  display: flex;
  flex-direction: row;
  gap: 9px;
  margin-top: 8px;
  flex-wrap: wrap;
  z-index: 200;
`;

export const HeroCategoryText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: 0.005em;
  color: #ffffff;
  padding: 1px 9px;
  left: 20px;
  top: 227px;
  background: #5baeb4;
  border-radius: 8px;
`;

export const BackDrop = styled.div`
  position: absolute;
  background: #000000;
  mix-blend-mode: multiply;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`;
