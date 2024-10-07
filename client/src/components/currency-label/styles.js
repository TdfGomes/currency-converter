import styled from "@emotion/styled";
import { slateGrey } from "ui/colors";
import { normal } from "ui/fontSize";

export const CurrencyLabel = styled.div({
  display: "flex",
  alignItems: "center",
  gap: 10,
  fontWeight: 700,
  fontSize: normal,
  margin: "5px 0",
  padding: "0 8px",
  color: slateGrey,
  ">img": {
    maxWidth: 25,
  },
});
