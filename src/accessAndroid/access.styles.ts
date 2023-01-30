import styled, { keyframes } from "styled-components";
//types
import { AccessType } from "../index.types";

// export const Container = styled("div")`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin: 20px 0 14px;
//   padding: 0 14px;
//   box-sizing: border-box;
// `;

// export const ImageContainer = styled("div")<{ type: AccessType }>`
//   display: flex;
//   /* height: ${({ type }) =>
//     type === "QR" || type === "AZTEC" ? "128px" : "100px"};
//   width: ${({ type }) =>
//     type === "QR" || type === "AZTEC" ? "128px" : "100%"}; */
//   padding: 15px 10px;
//   -webkit-box-pack: center;
//   justify-content: center;
//   -webkit-box-align: center;
//   align-items: center;
//   background: rgb(255, 255, 255);
//   border-radius: 6px;
//   box-shadow: rgb(0 0 0 / 16%) 0px 0px 4px 1px;
//   box-sizing: border-box;
// `;

// export const Image = styled("img")`
//   width: 70%;
//   height: 70px;
//   object-fit: cover;
// `;

// export const Text = styled("p")`
//   font-family: "Product Sans", sans-serif;
//   font-size: 14px;
//   color: rgb(0, 0, 0);
//   text-align: center;
//   letter-spacing: 0.025em;
//   margin-top: 14px;
//   margin-bottom: 0px;
// `;
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
  /* margin: auto; */

  padding: 5px;
  border-radius: 4px;
  box-sizing: border-box;
  background: #fff;
  box-shadow: rgb(0 0 0 / 16%) 0px 0px 4px 1px;
`;

export const Image = styled("img")<{ type: AccessType }>`
  height: ${({ type }) =>
    type === "AZTEC" || type === "QR" ? "128px" : "45px"};
  width: ${({ type }) =>
    type === "AZTEC" || type === "QR" ? "128px" : "225px"};
  object-fit: cover;
`;
// export const Image = styled("img")`
//   width: 70%;
//   height: 70px;
//   object-fit: cover;
// `;
export const Text = styled("p")<{ type: AccessType }>`
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
  from {
    transform: translate(-50%, -50%) rotate(0);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;
export const AnimatedBorder = styled("div")`
  position: relative;
  overflow: hidden;
  padding: 15px;
  border-radius: 8px;
  display: inline-block;
  &::before {
    content: "";
    display: block;
    background: conic-gradient(
      #b7d6fb,
      #b3faed,
      #bec3fa,
      #ddbded,
      #fabfd9,
      #f5dbcc,
      #faecb9,
      #faecb9,
      #f5dbcc,
      #fabfd9,
      #ddbded,
      #bec3fa,
      #b3faed,
      #b7d6fb
    );
    width: calc(100% * 1.41421356237);
    padding-bottom: calc(100% * 1.41421356237);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100%;
    z-index: -2;
    animation: ${AnimatedGradient} 4s linear infinite;
  }
  &::after {
    content: "";
    position: absolute;
    inset: 6px;
    background: white;
    z-index: -1;
    border-radius: 2px;
  }
`;
