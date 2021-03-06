import React from 'react'
import { bool } from 'prop-types'
import styled from '@emotion/styled'
import theme from '../styles/theme'

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${theme.tintGrey200};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? `translateX(0)` : `translateX(-100%)`)};

  @media (max-width: ${theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.2rem;
    color: ${theme.grey700};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${theme.tintGrey400};
    }
  }
`

export function Menu({ open, ...props }) {
  const isHidden = open ? true : false
  const tabIndex = isHidden ? 0 : -1

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true">
          &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
        </span>
        About us
      </a>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true">&#x1f4b8;</span>
        Pricing
      </a>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true">&#x1f4e9;</span>
        Contact
      </a>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}
