import React from 'react'
import styled from 'styled-components'
import { Subtitle } from '../common'
import { Edition } from './_components/Edition'

function HowIAm({ howIAm }) {
  const { title, description } = howIAm

  return (
    <Container>
      <Subtitle title={title} />
      <Edition description={description} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`

export default HowIAm
