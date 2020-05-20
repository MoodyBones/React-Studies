import React from 'react'
import styled from '@emotion/styled'
import logo from '../logo.svg'

const HeaderContainer = styled.header`
  padding-top: 6em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;

  .App-logo {
    height: 20vmin;
    pointer-events: none;
    margin-bottom: 60px;
  }

  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }

  // @keyframes App-logo-spin {
  //   from {
  //     transform: rotate(0deg);
  //   }
  //   to {
  //     transform: rotate(360deg);
  //   }
  // }
`

export function Header() {
  return (
    <HeaderContainer className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </HeaderContainer>
  )
}
