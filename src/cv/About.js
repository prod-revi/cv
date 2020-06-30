import React from 'react'
import styled from 'styled-components'
import { Subtitle, ContainerSection } from '../common'

function About(props) {
  const { title, info, description } = props.about
  return (
    <ContainerSection>
      <Subtitle title={title} />
      <AboutDivision>
        <FirstDivision>
          {info.map((item) => {
            return (
              <ContainerItem key={item.id}>
                <FirstColumn>{item.key} :</FirstColumn>
                <SecondColumn>{item.value}</SecondColumn>
              </ContainerItem>
            )
          })}
        </FirstDivision>
        <SecondDivision>
          <ContainerText>
            <p>{description}</p>
          </ContainerText>
        </SecondDivision>
      </AboutDivision>
    </ContainerSection>
  )
}

const AboutDivision = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: baseline;
  }
`

const FirstDivision = styled.div`
  margin-left: 10px;
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

  @media (max-width: 800px) {
    border: none;
    align-items: baseline;
    padding: 20px 10px;
  }
`

const ContainerText = styled.div`
  padding: 20px;

  @media (max-width: 800px) {
    padding: 0;
  }
`

export default About
