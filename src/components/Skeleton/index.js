import React from 'react';
import styled, { keyframes } from 'styled-components';

const keyFrameLoading = keyframes`
  0% {
    opacity: 0.25;
  }
  100% {
    opacity: 1;
  }
`;

export const LoadingSkeleton = styled.div`
  background-color: #c0c0c0;
  border-radius: 6px;
  margin-bottom: 10px;
  min-width: ${(props) => props.width};
  height: ${(props) => props.height};
  animation: ${keyFrameLoading} 500ms infinite alternate;
`;

export default ({ width, height }) => <LoadingSkeleton width={width} height={height} />;
