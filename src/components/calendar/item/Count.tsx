import React from "react";
import styled from "styled-components";

type CountProps = {
  value: number;
  color?: string; // Wouldn't normally do it like this - with more time would probably make this a 'type' value
}

const CountStyled = styled.cite<Pick<CountProps, 'color'>>`
  background-color: ${({color}) => color || "red"};
  color: #fff;
  padding: 0.1rem;
  line-height: 1;
  font-style: normal;
  font-weight: bolder;
  border-radius: 0.2rem;
  margin-right: 0.4rem;
  min-width: 1rem;
  text-align: center;
  display: inline-block;
`

export const Count = ({value, color}: CountProps) => (
  <CountStyled color={color}>
    {value}
  </CountStyled>
);
