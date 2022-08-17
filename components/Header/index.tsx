import { NextPage } from 'next';
import { Links, Navbar } from './index.style';

const Header: NextPage = () => {
  return (
    <Navbar>
      <h1>LOGO</h1>
      <Links>
        <p>HOME</p>
        <p>REPOSITORY</p>
      </Links>
    </Navbar>
  );
};

export default Header;
