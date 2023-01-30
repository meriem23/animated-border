import React, { FC } from "react";
import "../App.css";
//styles
import {
  Container,
  AccessCode,
  Image,
  ImageContainer,
  GradientBorder,
} from "./access.styles";
//types
import { AccessProps } from "../index.types";
//utils
import { barCodeTypesImage } from "../index.utils";

const Access: FC<AccessProps> = (props) => {
  //props
  const { accessType, accessCodeId, accessImage, accessBorder } = props;
  console.log(props);

  //render
  const renderAccessImage = () => {
    if (accessImage) {
      return <Image src={accessImage} alt={accessType} type={accessType} />;
    }
    if (!accessImage) {
      return barCodeTypesImage(accessType);
    } else return null;
  };

  const renderGradientBorder = () => {
    if (accessBorder) {
      return (
        <GradientBorder>
          <ImageContainer>{renderAccessImage()}</ImageContainer>
        </GradientBorder>
      );
    } else {
      return <ImageContainer>{renderAccessImage()}</ImageContainer>;
    }
  };
  return (
    <Container type={accessType}>
      {renderGradientBorder()}
      {accessCodeId && (
        <AccessCode type={accessType}>{accessCodeId}</AccessCode>
      )}
    </Container>
  );
};

export default Access;
