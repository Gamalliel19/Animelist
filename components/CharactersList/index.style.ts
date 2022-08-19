import styled from '@emotion/styled';

export const CharacterListContainer = styled.div`
  background: #f9f9f9;
  margin-top: 16px;
  border-radius: 14px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const CharacterListTitle = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.015em;
  color: #222222;
`;

export const CharacterLayout = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const CharacterImage = styled.div`
  height: 64px;
  width: 64px;
  border-radius: 100px;
  position: relative;
  overflow: hidden;
`;

export const ImageInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
`;
