import React, {ReactNode} from "react";
import styled, {css} from "styled-components";

type ButtonProps = {
  children: ReactNode;
  selected?: boolean
}

const Button$ = styled.button<ButtonProps>`
  border: 1px solid var(--button-border-color);
  border-radius: var(--button__border-radius);
  background-color: var(--button__bg-color);
  color: var(--button__color);
  font-size: 1rem;
  padding: 0.35rem 0.75rem;
  white-space: nowrap;
  cursor: pointer;

  ${(({selected}) => selected && css`
    border-color: var(--button-border-color--selected);
    background-color: var(--button__bg-color--selected);
    color: var(--button__color--selected);
    font-weight: bold;
    cursor: default;
    pointer-events: none;
  `)};
`

export const Button = ({children, selected}: ButtonProps) => (
  <Button$ selected={selected}>
    {children}
  </Button$>
);

