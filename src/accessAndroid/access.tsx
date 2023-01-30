import React, { FC } from "react";
//styles
import {
  Container,
  Image,
  ImageContainer,
  Text,
  AnimatedBorder,
} from "./access.styles";
//types
import { AccessProps } from "../index.types";
//utils
import { barCodeTypesImage } from "../index.utils";

const Access: FC<AccessProps> = (props) => {
  //props
  const { accessImage, accessType, accessCodeId, accessBorder } = props;
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
        <AnimatedBorder>
          <ImageContainer>{renderAccessImage()}</ImageContainer>
        </AnimatedBorder>
      );
    } else {
      return <ImageContainer>{renderAccessImage()}</ImageContainer>;
    }
  };
  //render
  return (
    <Container>
      {renderGradientBorder()}
      {accessCodeId && <Text type={accessType}>{accessCodeId}</Text>}
    </Container>
  );
};

export default Access;
