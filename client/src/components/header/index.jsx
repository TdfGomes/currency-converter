import * as S from "./styles";
import Nav from "./Nav";
import logo from "assets/logo.svg";

function Header({ links, onLogin }) {
  return (
    <S.Header>
      <Nav links={links} />
      <img src={logo} alt="uphold logo" />
      <S.LoginBtn onClick={onLogin}>Log In</S.LoginBtn>
    </S.Header>
  );
}

export default Header;
