import React from "react";
import styled from 'styled-components'
import { Subtitle, ContainerSection } from '../common'
import revImage from '../common/rev.jpg'

function About(props) {
  const { title, info } = props.about;
  return (
    <ContainerSection>
      <Subtitle title={title} />
      <AboutDivision>
        <FirstDivision>
          {info.map((item) => {
            return (
              <ContainerItem key={item.id}>
                <FirstColumn>{item.key}</FirstColumn>
                <SecondColumn>{item.value}</SecondColumn>
              </ContainerItem>
            )
          })}
        </FirstDivision>
        <SecondDivision>
          <ContainerImage>
            <img src={revImage} alt="revi" />
          </ContainerImage>
          <ContainerText>
            <p>I take the design and develop it into a website that works</p>
          </ContainerText>
        </SecondDivision>
      </AboutDivision>
    </ContainerSection>
  );
}

const AboutDivision = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const FirstDivision = styled.div`
  flex-basis: 40%;
`

const ContainerItem = styled.div`
  padding: 3px;
`

const FirstColumn = styled.span`
  font-weight: bold;
  text-align: left;
  display: inline-block;
  width: 80px;
`

const SecondColumn = styled.span`
  text-align: left;
  display: inline-block;
  width: 160px;
`

const SecondDivision = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 3px solid #6bdfdc;
  border-left-width: 0;
  border-right-width: 0;
  padding: 10px;
  border-radius: 11px;
`

const ContainerImage = styled.div`
  width: 125px;
  height: 115px;
  padding-right: 10px;
  border: 3px solid #6bdfdc;
  border-radius: 50%;
  overflow: hidden;

  img {
    max-width: 120%;
    width: 120%;
  }
`
const ContainerText = styled.div`
  padding: 20px;
`

export default About;
