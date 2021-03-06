import React from 'react'
import styled from '@emotion/styled'
import { Greeting } from './Greeting'

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // font-size: calc(10px + 2vmin);
  color: white;
  max-width: 750px;

  .bio {
    font-size: 2.8em;
    font-weight: 300;
    letter-spacing: 1px;
    line-height: 1.5;
  }

  .skills {
    margin: 5em 0;
    padding: 5em 5em;
    // color: #b57bff;
    color: #1e1e1e;
    background: #fafafa;
  }
`

export function Hero() {
  return (
    <HeroContainer className="wrap">
      <div className="bio-wrapper">
        <h2 className="bio">
          Heyyy, {<Greeting />} How's it going? I'm Mel Jones..
        </h2>
        <h3>I'm an Australian born, Berlin based Front-end Web Dev!</h3>
      </div>
      <div className="skills">
        <p>I love building:</p>
        <ol className="text-body">
          <li>React & Gatsby Apps</li>
          <li>Responsive CSS Layouts</li>
          <li>GraphQL</li>
        </ol>
      </div>
    </HeroContainer>
  )
}
