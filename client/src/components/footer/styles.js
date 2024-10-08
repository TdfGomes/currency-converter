import styled from "@emotion/styled";
import { lightSlateGrey, mutedShade, primary } from "ui/colors";
import { normal, small } from "ui/fontSize";

const borderColor = `hwb(from ${lightSlateGrey} h w b / 0.1 )`;
export const Footer = styled.footer({
  borderTop: `2px solid ${borderColor}`,
  width: "80%",
  margin: "100px auto 0 auto",
});

export const InnerFooter = styled.div({
  display: "flex",
  alignItems: "start",
  justifyContent: "space-between",
  paddingTop: 75,
  ">img": {
    maxWidth: 80,
  },
});

export const LinkSection = styled.div({
  ">p": {
    fontSize: normal + 2,
    fontWeight: 700,
    color: lightSlateGrey,
    marginTop: 0,
  },
  ">ul": {
    listStyle: "none",
    padding: 0,
    margin: 0,
    ">li": {
      color: mutedShade,
      fontWeight: 500,
      ">a": {
        color: "inherit",
        textDecoration: "none",
      },
    },
  },
});

export const AppStores = styled.div({});
export const LogosContainer = styled.div({
  textAlign: "right",
  marginBottom: 15,
  ">img:not(:last-of-type)": {
    marginRight: 25,
  },
});

export const LocaleSelect = styled.select({
  border: `1px solid ${borderColor}`,
  borderRadius: 5,
  padding: 5,
  color: mutedShade,
});

export const FooterNote = styled.div({
  display: "flex",
  alignContent: "center",
  justifyContent: "space-between",
  color: mutedShade,
  fontSize: small,
  fontWeight: 500,
});

export const Address = styled.address({
  fontStyle: "normal",
});

export const Rights = styled.div({
  textAlign: "left",
});

export const Disclaimer = styled.a({
  textTransform: "none",
  textDecoration: "none",
  color: "inherit",
  margin: "0 12px",
  position: "relative",
  "&:after": {
    content: "''",
    height: 2,
    width: "80%",
    background: primary,
    position: "absolute",
    bottom: -2,
    left: "50%",
    transform: "translateX(-50%)",
    opacity: 0.2,
  },
});
