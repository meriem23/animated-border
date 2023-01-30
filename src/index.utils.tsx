import React from "react";
//images
import { Svgs } from "./constants/images";
//types
import { AccessType } from "./index.types";

export const barCodeTypesImage = (barCode: AccessType) => {
  if (barCode === "AZTEC") {
    return <Svgs.AZTEC />;
  }
  if (barCode === "QR") {
    return <Svgs.QR />;
  }
  if (barCode === "CODE128") {
    return <Svgs.CODE128 />;
  }
  if (barCode === "PDF417") {
    return <Svgs.PDF417 />;
  } else return null;
};
