import styled, { keyframes } from "styled-components";
//types
import { AccessType } from "../index.types";

export const Container = styled("div")<{ type?: AccessType }>`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 15px 10px;
  border-radius: 4px;
  /* background: #fff; */
  margin-top: ${({ type }) =>
    type === "CODE128" || type === "PDF417" ? "90px" : "100px"};
  margin-bottom: ${({ type }) =>
    type === "CODE128" || type === "PDF417" ? "30px" : "45px"};
  margin-right: auto;
  margin-left: auto;
`;
export const ImageContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  /* padding: 15px 0px; */
  border-radius: 4px;
  box-sizing: border-box;
  background: #fff;
`;

export const Image = styled("img")<{ type: AccessType }>`
  height: ${({ type }) =>
    type === "AZTEC" || type === "QR" ? "128px" : "45px"};
  width: ${({ type }) =>
    type === "AZTEC" || type === "QR" ? "128px" : "225px"};
  object-fit: cover;
`;
export const AccessCode = styled("p")<{ type: AccessType }>`
  text-align: center;
  font-family: "Product Sans", sans-serif;
  color: #000;
  margin: ${({ type }) =>
    type === "AZTEC" || type === "QR"
      ? "9px auto 0px auto"
      : "11px auto 0px auto"};
  font-size: 14px;
  font-weight: 450;
`;
const AnimatedGradient = keyframes`
 50% {
      background-position: 100% 50%;
    }
`;
export const GradientBorder = styled("div")`
  background: #fff;
  padding: 8px;
  width: fit-content;
  height: fit-content;
  position: relative;
  border-radius: 12px;
  &::after {
    content: "";
    position: absolute;
    top: calc(-1 * 6px);
    left: calc(-1 * 6px);
    height: calc(100% + 12px);
    width: calc(100% + 12px);
    background: linear-gradient(
      60deg,
      #d9a1c8,
      #f2bfca,
      #ff968a,
      #f9d5c6,
      #ffedd6,
      #ffffb5,
      #55cbcd,
      #bddad1,
      #d4f0f0
    );
    border-radius: calc(12px);
    z-index: -1;
    animation: ${AnimatedGradient} 4s alternate infinite;
    background-size: 300% 300%;
  }
`;
