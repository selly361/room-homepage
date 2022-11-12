import { ImageWrapper, SliderImage, Wrapper } from "./sllider-styles";

import React from "react";
import SliderButton from "components/SliderButton/SliderButton";
import SliderContent from "components/SliderContent/SliderContent";
import { slideAnimation } from "global/animation";
import { useAppSelector } from "app/hooks";

const Slider = () => {
  const { slideData, currentSlideIndex, direction } = useAppSelector(
    (state) => state.slider
  );

  const { title, content, image, imageMobile } = slideData[currentSlideIndex];
  return (
    <Wrapper>
      <ImageWrapper>
        <SliderImage
          key={title}
          custom={direction}
          variants={slideAnimation}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 1,
          }}
          src={image}
        />
        <SliderButton />
      </ImageWrapper>
      <SliderContent />
    </Wrapper>
  );
};

export default Slider;
