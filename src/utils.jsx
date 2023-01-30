import { Svgs } from "./constants/images";

export const barCodeTypesImage = (barCode) => {
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
