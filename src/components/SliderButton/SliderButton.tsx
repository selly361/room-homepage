import { ButtonWrapper, NextButton, PrevButton } from "./sliderButton-styles";
import { LeftArrowIcon, RightArrowIcon } from "assets";
import { nextSlide, prevSlide } from "features/sliderSlice";

import React from "react";
import { useAppDispatch } from "app/hooks";

const SliderButton = () => {
    const dispatch = useAppDispatch()
  return (
    <ButtonWrapper>
      <PrevButton onClick={() => dispatch(prevSlide())}>
        <LeftArrowIcon />
      </PrevButton>
      <NextButton onClick={() => dispatch(nextSlide())}>
        <RightArrowIcon />
      </NextButton>
    </ButtonWrapper>
  );
};

export default SliderButton;
