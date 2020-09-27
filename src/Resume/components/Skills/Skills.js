import React from 'react'
import styled from 'styled-components'
import { Subtitle } from '../common'

function Skills(props) {
  const { title, skills } = props.skills
  return (
    <Container>
      <Subtitle title={title} />
      <ContainerSkills>
        {skills.map(skill => {
          const { name, time } = skill
          return (
            <SkillContainer key={Math.random()}>
              <span>{name}</span>
              <span>{time}</span>
            </SkillContainer>
          )
        })}
      </ContainerSkills>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`

const ContainerSkills = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 10px;
`

const SkillContainer = styled.div`
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: 'a0 b0';
  gap: 0 0.5rem;

  span {
    &:first-child {
      grid-area: a0 / a0 / a0 / a0;
    }

    &:last-child {
      grid-area: b0 / b0 / b0 / b0;
    }
  }
`

export default Skills
