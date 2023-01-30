import React from "react";
import { AccessCode, Container, ImageContainer } from "./access/access.styles";
import Access from "./accessAndroid/access";
import "./App.css";
import { Svgs } from "./constants/images";
function App() {
  return (
    <div className="App">
      <Container type="QR">
        <div className="gradient-border">
          <ImageContainer>
            <Svgs.QR />
          </ImageContainer>
        </div>
        <AccessCode type="PDF417">12345888dfff5555555</AccessCode>
      </Container>

      <div>
        <div className="rotating-border rotating-border--rainbow">
          <ImageContainer>
            <Svgs.QR />
          </ImageContainer>
        </div>
        <AccessCode type="PDF417">12345888dfff5555555</AccessCode>
      </div>
    </div>
  );
}

export default App;
