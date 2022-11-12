import { motion } from "framer-motion"
import styled from "styled-components";

export const Wrapper = styled.div`
  height: 534px;
  width: 100vw;
  display: flex;
`;

export const ImageWrapper = styled.div`
  width: 70%;
  height: 100%;
  position: relative;
`

export const SliderImage = styled(motion.img)`
    height: 100%;
    width: 100%;
    object-fit: cover;
`

