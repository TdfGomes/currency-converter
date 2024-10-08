import * as S from "./styles";
import Nav from "./Nav";
import CompanyLogo from "../logo";

function Header({ links, onLogin }) {
  return (
    <S.Header>
      <Nav links={links} />
      <CompanyLogo />
      <S.LoginBtn onClick={onLogin}>Log In</S.LoginBtn>
    </S.Header>
  );
}

export default Header;
