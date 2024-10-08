import * as S from "./styles";

function Hero({ title, subTitle }) {
  return (
    <>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subTitle}</S.SubTitle>
    </>
  );
}

export default Hero;
