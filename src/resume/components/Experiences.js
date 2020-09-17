import React from 'react'
import styled from 'styled-components'
import { Subtitle, ContainerSection } from './common'

function Experiences(props) {
  const { title, items } = props.experiences
  return (
    <ContainerSection>
      <Subtitle title={title} withoutBackground />
      <>
        {items.map(experience => {
          const { id, title, date, company, description } = experience
          return (
            <ExperienceContainer key={id}>
              <SpanStyled>{company}</SpanStyled>
              <span>{title}</span>
              <span>{date}</span>
              <p>{description}</p>
            </ExperienceContainer>
          )
        })}
      </>
    </ContainerSection>
  )
}

const ExperienceContainer = styled.div`
  margin: 10px 10px 20px;
  padding-top: 10px;
  border-bottom: 1px solid #6bdfdc;

  &:last-child {
    border-bottom: none;
  }

  span {
    margin-right: 20px;
  }
`

const SpanStyled = styled.span`
  text-transform: uppercase;
  /* font-style: italic; */
  font-weight: 600;
`

export default Experiences
