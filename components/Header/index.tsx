import { NextPage } from 'next';
import { Links, Logo, Navbar, NavLinks } from './index.style';

const Header: NextPage = () => {
  return (
    <Navbar>
      <Logo>Anime List</Logo>
      <Links>
        <NavLinks href='/Favorites'>FAVORITES</NavLinks>
        <NavLinks href='/Collection'>COLLECTION</NavLinks>
      </Links>
    </Navbar>
  );
};

export default Header;
