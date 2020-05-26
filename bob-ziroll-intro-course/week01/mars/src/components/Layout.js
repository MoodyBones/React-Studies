import React from 'react'
import styled from '@emotion/styled'
import theme from '../styles/theme'

const Grid = styled.div`
  background: ${theme.grey50};
`

export function Layout() {
  return <Grid className="main-grid"></Grid>
}
