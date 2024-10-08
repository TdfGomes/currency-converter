import * as S from "./styles";
import qrCode from "assets/qr-code.svg";

function FooterNote({ disclaimers }) {
  return (
    <S.FooterNote>
      <div>
        <S.Address>
          Uphold Europe Limited, Reg No. 09281410, Registered Office: Interchange Triangle, Chalk
          Farm Road, London, England, NW1 8AB
        </S.Address>
        <S.Rights>
          <span>© Uphold, Inc. 2018. All Rights Reserved. </span>
          {disclaimers.map((disclaimer) => (
            <S.Disclaimer key={disclaimer} href={`#${disclaimer}`}>
              {disclaimer}
            </S.Disclaimer>
          ))}
        </S.Rights>
      </div>
      <div>
        <img src={qrCode} alt="qr code" />
      </div>
    </S.FooterNote>
  );
}

export default FooterNote;
