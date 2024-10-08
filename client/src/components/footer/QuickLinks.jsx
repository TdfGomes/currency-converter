import * as S from "./styles";

function LinkSection({ title, links }) {
  return (
    <S.LinkSection>
      <p>{title}</p>
      <ul>
        {links.map((link) => (
          <li key={link}>
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
      </ul>
    </S.LinkSection>
  );
}

function QuickLinks({ links }) {
  return links.map(({ name, children }) => (
    <LinkSection key={name} links={children} title={name} />
  ));
}

export default QuickLinks;
