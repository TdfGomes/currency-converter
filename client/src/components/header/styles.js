import styled from "@emotion/styled";
import { mutedShade, primary, white } from "ui/colors";
import { normal } from "ui/fontSize";

export const Header = styled.header({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "15px 35px",
  width: "100%",
  position: "relative",
  marginBottom: 75,
  ">img": {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
  },
});

export const Nav = styled.nav({
  color: mutedShade,
});

export const UL = styled.ul({
  padding: 0,
  margin: 0,
  listStyle: "none",
});

export const LI = styled.li({
  display: "inline",
  fontWeight: 800,
  "&:not(:last-of-type)": {
    marginRight: 25,
  },
  ">a": {
    textDecoration: "none",
    color: "inherit",
  },
});

export const LoginBtn = styled.button({
  background: primary,
  color: white,
  borderRadius: 15,
  cursor: "pointer",
  fontSize: normal,
  padding: "7px 25px",
  border: "1px solid transparent",
  transition: "background,border,color 150ms",
  "&:hover": {
    background: white,
    color: primary,
    border: `1px solid ${primary}`,
  },
});
