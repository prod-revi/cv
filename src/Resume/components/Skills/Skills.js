import React from 'react'
import styled from 'styled-components'
import { Subtitle, ContainerSection } from '../common'

function Skills(props) {
  const { title, skills } = props.skills
  return (
    <ContainerSection>
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
    </ContainerSection>
  )
}

const ContainerSkills = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
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
