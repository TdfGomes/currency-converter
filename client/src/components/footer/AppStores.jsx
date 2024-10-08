import * as S from "./styles";
import apple from "assets/appstore.svg";
import google from "assets/playstore.svg";

const STORE_MAP = {
  apple,
  google,
};

const LOCALES = ["Portuguese", "French", "German"];

function AppStores({ stores }) {
  return (
    <S.AppStores>
      <S.LogosContainer>
        {stores.map((store) => (
          <img key={store} src={STORE_MAP[store]} alt={`${store} logo`} />
        ))}
      </S.LogosContainer>
      <S.LocaleSelect name="locale-selector" defaultValue="English">
        {LOCALES.map((locale) => (
          <option value={locale} key={locale}>
            {locale}
          </option>
        ))}
      </S.LocaleSelect>
    </S.AppStores>
  );
}

export default AppStores;
