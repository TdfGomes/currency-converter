import styled from "@emotion/styled";
import { aliceBlue, lightSlateGrey, slateGrey, white } from "ui/colors";
import { softDifused } from "ui/shadows";
import icon from "assets/dropdown-icon.svg";
import { normal, xxLarge } from "ui/fontSize";

export const FieldSet = styled.fieldset({
  outline: "none",
  border: "none",
});

export const Select = styled.button({
  border: "none",
  backgroundColor: white,
  borderRadius: 25,
  padding: "5px 15px",
  width: 135,
  position: "relative",
  fontSize: normal,
  "&[aria-expanded=true]": {
    "&:after": {
      transform: "translateY(-50%) rotate(180deg)",
    },
  },
  "&:after": {
    content: '""',
    position: "absolute",
    backgroundImage: `url(${icon})`,
    backgroundRepeat: "no-repeat",
    minWidth: 8,
    height: 5,
    top: "50%",
    right: 10,
    transform: "translateY(-50%) rotate(0)",
  },
  ">input": {
    fontSize: normal,
    color: slateGrey,
    textTransform: "uppercase",
  },
});

export const Input = styled.input({
  outline: "none",
  border: "none",
  backgroundColor: "transparent",
  fontSize: xxLarge,
  color: lightSlateGrey,
  width: "auto",
  padding: 5,
  lineHeight: 1,
  "&:focus": {
    outline: "none",
    border: "none",
  },
});

export const ListBox = styled.div({
  maxWidth: 110,
  borderRadius: 5,
  boxShadow: softDifused,
  backgroundColor: white,
  padding: " 0 8px",
  overflow: "hidden",
  ">div": {
    boxSizing: "content-box",
    paddingRight: 25,
  },
  "[role=option]": {
    cursor: "pointer",
  },
});

export const CurrencyField = styled.form({
  background: aliceBlue,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "5px 25px",
  borderRadius: 5,
});
