import React from 'react'
import styled from 'styled-components'
import { Subtitle } from '../common'

function Experiences(props) {
  const { title, items } = props.experiences

  return (
    <Container>
      <Subtitle title={title} withoutBackground />
      <>
        {items.map(experience => {
          const { title, date, company, description } = experience

          return (
            <ExperienceContainer key={Math.random() * 15}>
              <SpanStyled>{company}</SpanStyled>
              <ContainerTitleDescription>
                <span>{title}</span>
                <span>{date}</span>
              </ContainerTitleDescription>
              <p>{description}</p>
            </ExperienceContainer>
          )
        })}
      </>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`

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

  p {
    white-space: pre-wrap;
  }
`

const SpanStyled = styled.span`
  text-transform: uppercase;
  /* font-style: italic; */
  font-weight: 600;
`

const ContainerTitleDescription = styled.div`
  margin: 0.5rem 0 2rem;
  display: flex;
`

export default Experiences
