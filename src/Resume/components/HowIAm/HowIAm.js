import React from 'react'
import styled from 'styled-components'
import { Subtitle } from '../common'

function HowIAm({ howIAm }) {
  const { title, description } = howIAm
  return (
    <Container>
      {title && <Subtitle>{title}</Subtitle>}
      <ContainerDescription>{description && description}</ContainerDescription>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`

const ContainerDescription = styled.div`
  margin: 10px 10px 20px;
`

export default HowIAm
