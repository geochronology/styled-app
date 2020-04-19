import React from 'react'
import styled, { css } from 'styled-components'
import { Wrapper, FadeIn } from './styled'

const StyledButton = styled.button`
  background-color: ${props => props.theme.colors.light};
  color: ${props => props.theme.colors.main};
  font-size: ${props => props.theme.fontSizes.p};
  margin: ${({ margin }) => margin || '2rem'};
  padding: .5rem 1rem;
  border: 1px solid blue;
  border-radius: 3px;
  animation: 800ms ${FadeIn} ease-in;
  
  ${({ fig }) => "fig" && css`
    background-color: orange;
    color: white;
    box-shadow: 0 .5rem 1.5rem rgba(0, 0, 0, .2);
  `}
  
  /* ${({ primary }) => primary && css`
    background-color: darkblue;
    color: white;
    box-shadow: 0 .5rem 1.5rem rgba(0, 0, 0, .2);
  `} */
  
  &:hover {
    color: white;
    background-color: palevioletred;
  }
  
  .nestedEl {
    color: blueviolet;
  }
  
  @media ${({ theme }) => theme.mediaQueries.below768} {
    font-size: 1rem;
    color: blue;
  }
`

const OuterWrapper = styled.div`
  width: 100%;
  background-color: purple;
  margin-top: 2rem;
  
  &:hover ${StyledButton} {
    color: green;
  }
`

const SuperButton = styled(StyledButton)`
  font-size: 2.5rem;
  color: orangered;
`

const Button = ({ primary, margin, children }) => {
  return (
    <OuterWrapper>
      <StyledButton margin={margin} primary={primary} fig="fig">
        {children}
        <p className="nestedEl">asdf</p>
      </StyledButton>
    </OuterWrapper>
  )
}

export default Button
