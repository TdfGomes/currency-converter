import styled from "@emotion/styled";
import { aliceBlue, darkBlueGrey, lightSlateGrey, slateGrey, white } from "ui/colors";
import { softDifused } from "ui/shadows";
import icon from "assets/dropdown-icon.svg";
import { normal, xxLarge } from "ui/fontSize";

export const FieldSet = styled.fieldset({
  outline: "none",
  border: "none",
  margin: 0,
  position: "relative",
});

export const Select = styled.button({
  border: "none",
  backgroundColor: white,
  borderRadius: 25,
  padding: "5px 15px 5px 5px",
  width: 135,
  position: "relative",
  fontSize: normal,
  minHeight: 45,
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
  width: "auto",
  padding: 5,
  color: darkBlueGrey,
  lineHeight: 1,
  "&:focus": {
    outline: "none",
    border: "none",
  },
  "&:placeholder": {
    color: lightSlateGrey,
  },
});

export const ListBox = styled.div({
  maxWidth: 130,
  borderRadius: 5,
  boxShadow: softDifused,
  backgroundColor: white,
  padding: 0,
  overflow: "hidden",
  position: "absolute",
  top: "calc(100% - 5px)",
  left: 17,
  ">div": {
    boxSizing: "content-box",
    paddingRight: 45,
  },
  "[role=option]": {
    cursor: "pointer",
    transition: "background-color 200ms ease-in-out",
    "&:hover": {
      backgroundColor: aliceBlue,
    },
  },
});

export const CurrencyField = styled.form({
  background: aliceBlue,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "5px 25px",
  borderRadius: 5,
  margin: "30px 0",
});
