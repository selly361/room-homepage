type Islide = {
  scale: number;
};

export const slideAnimation = {
  enter: (direction: number): Islide => {
    return {
      scale: 0,
    };
  },
  center: {
    scale: 1,
  },
  exit: (direction: number): Islide => {
    return {
      scale: 1,
    };
  },
};

type IslideContent = {
  x: string;
  opacity: number;
};

export const sliderContentAnimation = {
  enter: (direction: number): IslideContent => {
    return {
      x: direction < 0 ? "-200px" : "200px",
      opacity: 0,
    };
  },
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (direction: number): IslideContent => {
    return {
      x: direction > 0 ? "200px" : "-200px",
      opacity: 1,
    };
  },
};
