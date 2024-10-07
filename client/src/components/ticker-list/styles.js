import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { darkBlueGrey, lightSlateGrey, primary } from "ui/colors";
import { medium } from "ui/fontSize";

const spinnerAnimations = keyframes`
  to {
    transform: translate(-50%,-50%) rotate(360deg)
  }
`;

export const TickerList = styled.ul({
  padding: "0 25px",
  margin: 0,
  width: "100%",
});
export const TickerItem = styled.li({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  ">span": {
    fontSize: medium,
    color: darkBlueGrey,
    fontWeight: 500,
  },
});

export const LoadingSpinner = styled.div({
  background: "transparent",
  position: "relative",
  width: "100%",
  height: 70,
  marginTop: 25,
  marginBottom: 25,
  "&:before": {
    content: "''",
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 50,
    height: 50,
    borderRadius: "60%",
    border: `5px solid hwb(from ${lightSlateGrey} h w b / 0.2)`,
    borderTopColor: primary,
    transform: "translate(-50%,-50%)",
    animation: `${spinnerAnimations} .6s linear infinite`,
  },
});
