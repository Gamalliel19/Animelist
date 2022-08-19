import { NextPage } from 'next';
import { Links, Logo, Navbar, NavLinks } from './index.style';

const Header: NextPage = () => {
  return (
    <Navbar>
      <Logo>Anime List</Logo>
      <Links>
        <NavLinks>COLLECTION</NavLinks>
        <NavLinks>REPOSITORY</NavLinks>
      </Links>
    </Navbar>
  );
};

export default Header;
