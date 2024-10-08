import CompanyLogo from "components/logo";
import QuickLinks from "./QuickLinks";
import AppStores from "./AppStores";
import FooterNote from "./FooterNote";
import * as S from "./styles";

function Footer({ quickLinks, disclaimers }) {
  return (
    <S.Footer>
      <S.InnerFooter>
        <CompanyLogo />
        <QuickLinks links={quickLinks} />
        <AppStores stores={["apple", "google"]} />
      </S.InnerFooter>
      <FooterNote disclaimers={disclaimers} />
    </S.Footer>
  );
}

export default Footer;
