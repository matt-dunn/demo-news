import React, {ReactNode} from "react";
import styled from "styled-components";

type ButtonGroupProps = {
  children: ReactNode;
}

const ButtonGroup$ = styled.nav`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;

  button:not(:first-of-type):not(:last-of-type) {
    border-radius: 0;
  }
  
  button:not(:last-of-type) {
    border-right: none;
  }
  
  button:first-of-type {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  
  button:last-of-type {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`

export const ButtonGroup = ({children}: ButtonGroupProps) => (
  <ButtonGroup$>
    {children}
  </ButtonGroup$>
);
