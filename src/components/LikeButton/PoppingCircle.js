import React from "react";
import styled, { keyframes } from "styled-components";
const PoppingCircle = ({ size, color }) => {
  return (
    <Wrapper
      style={{ height: size, width: size, backgroundColor: color }}
    ></Wrapper>
  );
};

const fade = keyframes`
  0% {
    opacity:0;
  }
  50% {
    opacity:1;
  }
  100% {
    opacity:0;
  }
`;

const scale = keyframes`
0% {
    opacity:0;
    transform: scale(0)
  }
  50% {
    opacity:1;
    transform: scale(1)
  }
  100% {
    opacity:0;
    transform: scale(0)
  }
`;

const Wrapper = styled.div`
  border-radius: 50%;
  position: absolute;
  animation: ${fade} 500ms forwards, ${scale} 500ms forwards;
`;

export default PoppingCircle;
