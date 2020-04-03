import React from 'react'
import styled from 'styled-components'
import revImage from '../common/rev.jpg'

function Head(props) {
  const { name, carrier } = props.head
  return (
    <HeadContainer>
      <ContainerImage>
        <img src={revImage} alt="revi" />
      </ContainerImage>

      <ContainerText>
        <h1>{name}</h1>
        <h2>{carrier}</h2>
      </ContainerText>
    </HeadContainer>
  )
}

const HeadContainer = styled.div`
  padding: 10px 50px;
  text-align: left;
  display: flex;

  background-color: #1fc8db54;
  background-image: linear-gradient(
    141deg,
    #3ee69ca6 0%,
    #1fc8db78 51%,
    #289cff9e 75%
  );
`

const ContainerText = styled.div`
  margin-left: 25px;
`

const ContainerImage = styled.div`
  width: 125px;
  height: 125px;
  padding-right: 10px;
  border: 3px solid #6bdfdc;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 110%;
  }
`

export default Head
