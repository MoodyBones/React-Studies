import React from 'react'
import styled from '@emotion/styled'

import image from '../image-hero.jpg'

const HeroImageWrapper = styled.div`
  img {
    width: 100%;
    height: auto;
    margin-bottom: 60px;
  }
`

export function HeroImage() {
  return (
    <HeroImageWrapper>
      <img src={image} className="hero-image" alt="Photo of Mel Jones" />
    </HeroImageWrapper>
  )
}
