import { NextPage } from 'next';
import { Loader } from './index.style';
const Loading: NextPage = () => {
  return (
    <Loader>
      <h1>Loading...</h1>
    </Loader>
  );
};
export default Loading;
