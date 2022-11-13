import { Article, Button } from "./sliderContent-styles";

import { ArrowIcon } from "assets";
import React from "react";
import { sliderContentAnimation } from "global/animation";
import { useAppSelector } from "app/hooks";
import { useSelector } from "react-redux";

const SliderContent = () => {
  const { slideData, currentSlideIndex, direction } = useAppSelector((state) => state.slider);

  const { title, content } = slideData[currentSlideIndex];

  return (
    <Article
      key={title}
      custom={direction}
      variants={sliderContentAnimation}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        duration: 1,
        delay: 1
      }}
    >
      <h1>{title}</h1>
      <p>{content}</p>
      <Button>
        SHOP NOW <ArrowIcon />
      </Button>
    </Article>
  );
};

export default SliderContent;
