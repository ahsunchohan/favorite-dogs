import React from "react";
import { Carousel } from "react-responsive-carousel";

const Gallery = ({ onChange, children }) => {
  return (
    <div
      style={{
        width: "100%",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ width: "50%" }}>
        <Carousel swipeable={true} onChange={onChange} showThumbs={true} showArrows={true} centreMode={true} showStatus={true} thumbWidth={"100px"}>
          {children}
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;
