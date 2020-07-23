import React from 'react'
import styled from 'styled-components'
import revImage from '../../common/rev.jpg'

function Head(props) {
  const { name, carrier } = props.head
  return (
    <HeadContainer>
      <BackgroundHead></BackgroundHead>
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

const BackgroundHead = styled.div`
  background-color: #6bdfdc;
  height: 80%;
  display: block;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

const HeadContainer = styled.div`
  padding: 10px 50px;
  text-align: left;
  display: flex;
  position: relative
`

const ContainerText = styled.div`
  margin-left: 25px;
  z-index: 9;
`

const ContainerImage = styled.div`
  width: 152px;
  height: 152px;
  padding-right: 10px;
  border: 3px solid #6bdfdc;
  border-radius: 50%;
  overflow: hidden;
  z-index: 9;

  img {
    width: 110%;
  }
`

export default Head
