import React from 'react'
import styled from 'styled-components'

function Head(props) {
  const { name, carrier } = props.head
  return (
    <HeadContainer>
      <ContainerText>
        <h1>{name}</h1>
        <h2>{carrier}</h2>
      </ContainerText>
      <Card>
        <div>oliiv@outlook.com</div>
        <div>+5491124541234</div>
      </Card>
    </HeadContainer>
  )
}

const HeadContainer = styled.div`
  display: flex;
  background-color: #6bdfdc;
  padding: 2rem;
  justify-content: space-between;
`

const ContainerText = styled.div`
  margin-left: 0.5rem;

  h1 {
    margin-bottom: 0.5rem;
  }
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`

export default Head
