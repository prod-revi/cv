import React from 'react'
import styled from 'styled-components'
import { Subtitle } from '../common'

function Educations(props) {
  const { title, items } = props.educations
  return (
    <Container>
      <Subtitle title={title} withoutBackground />
      <>
        {items.map(edu => {
          const { school, title, description, dates } = edu
          return (
            <EducationContainerItem key={Math.random()}>
              <SpanStyled>{school}</SpanStyled>
              <ContainerTitleDescription>
                <span>{title}</span> <span>{dates}</span>
              </ContainerTitleDescription>
              <div>{description}</div>
            </EducationContainerItem>
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

const ContainerTitleDescription = styled.div`
  margin: 0.5rem 0 2rem;
  display: flex;
  justify-content: space-between;
`

const EducationContainerItem = styled.div`
  display: block;
  padding: 0 0 20px;
  margin: 10px 10px 20px;
  border-bottom: 1px solid #6bdfdc;

  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
  }

  span {
    display: block;
  }
`

const SpanStyled = styled.span`
  text-transform: uppercase;
  /* font-style: italic; */
  font-size: 1.1em;
  font-weight: 600;
`

export default Educations
