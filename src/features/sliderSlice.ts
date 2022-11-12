import { createSlice } from "@reduxjs/toolkit";
import slideData from "data/data.json";
import { wrap } from "popmotion";

const sliderSlice = createSlice({
  name: "slideShow",
  initialState: {
    slideData,
    currentSlideIndex: wrap(0, slideData.length, 0),
    direction: 1,
  },

  reducers: {
    nextSlide: (state) => {
      state.direction = 1;
      state.currentSlideIndex = wrap(0, slideData.length, state.currentSlideIndex + 1);
    },
 
    prevSlide: (state) => {
      state.direction = -1;
      state.currentSlideIndex = wrap(0, slideData.length, state.currentSlideIndex - 1);
    },
  },
});

export default sliderSlice.reducer;
export const { prevSlide, nextSlide } = sliderSlice.actions

