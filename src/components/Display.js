import React from 'react';
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

const Display = ({ expression, result }) => {
  return (
    <DisplayContainer>
      <Expression variant="h4" color="textPrimary">{expression}</Expression>
      <Result variant="h6" color="textSecondary">{result}</Result>
    </DisplayContainer>
  );
};

const DisplayContainer = styled(Box)`
  background-color: #696969;
  border-radius: 2px;
  padding: 27px;
  font-size: 2.5rem;
  text-align: right;
  overflow: hidden;
  margin: 10px;

  @media (max-width: 600px) {
    padding: 15px;
    font-size: 1.7rem;
  }
`;

const Expression = styled(Typography)`
  white-space: nowrap;
  overflow-x: auto;
  color: white; /* Ensure text color is white */
`;

const Result = styled(Typography)`
  color: grey;
  font-size: 1.5rem;
`;

export default Display;
