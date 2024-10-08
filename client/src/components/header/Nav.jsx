import * as S from "./styles";

function Nav({ links }) {
  return (
    <S.Nav>
      <S.UL>
        {links.map((link) => (
          <S.LI key={link}>
            <a href={`#${link}`}>{link}</a>
          </S.LI>
        ))}
      </S.UL>
    </S.Nav>
  );
}

export default Nav;
