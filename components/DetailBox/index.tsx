import { NextPage } from 'next';
import {
  DetailBoxContainer,
  DetailBoxDesc,
  DetailBoxTitle,
} from './index.style';

const DetailBox: NextPage<{ description: string }> = ({ description }) => {
  return (
    <DetailBoxContainer>
      <DetailBoxTitle>Description</DetailBoxTitle>
      <DetailBoxDesc dangerouslySetInnerHTML={{ __html: description }} />
    </DetailBoxContainer>
  );
};

export default DetailBox;
