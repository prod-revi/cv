import React from 'react'
import styled from 'styled-components'
import { Subtitle, ContainerSection } from './common'

function HowIAm({ howIAm }) {
  const { title, description } = howIAm
  return (
    <ContainerSection>
      {title && <Subtitle>{title}</Subtitle>}
      <Container>{description && description}</Container>
    </ContainerSection>
  )
}

const Container = styled.div`
  margin: 10px 10px 20px;
`

export default HowIAm
