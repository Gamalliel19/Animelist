import { NextPage } from 'next';
import { Links, Navbar } from './index.style';

const Header: NextPage = () => {
  return (
    <Navbar>
      <h1>Anime List</h1>
      <Links>
        <p>COLLECTION</p>
        <p>REPOSITORY</p>
      </Links>
    </Navbar>
  );
};

export default Header;
