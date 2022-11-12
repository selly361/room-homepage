import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledHeader = styled(motion.header)`
  position: absolute;
  width: 362px;
  height: 15px;
  left: 64px;
  top: 63px;
  display: flex;
  gap: 56px;
  align-items: center;
  background-color: transparent;
  z-index: 20;
`;
