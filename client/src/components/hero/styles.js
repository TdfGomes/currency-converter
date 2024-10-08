import styled from "@emotion/styled";
import { darkShadeBlue, mutedShade } from "ui/colors";
import { large, xxLarge } from "ui/fontSize";

export const Title = styled.h1({
  textAlign: "center",
  color: darkShadeBlue,
  fontSize: xxLarge,
  marginBottom: 10,
});
export const SubTitle = styled.h4({
  textAlign: "center",
  color: mutedShade,
  fontWeight: 500,
  fontSize: large - 5,
  marginTop: 0,
});
