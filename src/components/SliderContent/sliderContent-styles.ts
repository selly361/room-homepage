import { motion } from "framer-motion"
import styled from "styled-components";

export const Article = styled(motion.article)`
  padding: 100px 100px 153px 100px;
  width: 600px;
  height: 100%;
  display: grid;
  gap: 20px;
`;

export const Button = styled.button`
  font-weight: 500;
  font-size: 15px;
  line-height: 16px;
  letter-spacing: 12.5px;
  color: #a0a0a0;
  display: flex;
  gap: 30px;
  align-items: center;
  background-color: transparent;
    transition: 1s padding;
    
  &:hover {
    padding-left: 2rem;
  }
`;
