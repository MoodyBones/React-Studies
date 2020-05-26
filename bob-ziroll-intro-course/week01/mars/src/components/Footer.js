import React from 'react'
import styled from '@emotion/styled'

const FooterLink = styled.a`
  padding: 20px;
  color: #fff;
  text-align: right;

  position: fixed;
  left: 0px;
  bottom: 0px;
  height: 70px;
  width: 100%;
`

export function Footer() {
  return (
    <footer>
      <FooterLink
        className="footer-link"
        href="https://twitter.com/_moodybones"
        target="_blank"
        rel="noopener noreferrer"
      >
        Made by Moody
      </FooterLink>
    </footer>
  )
}
