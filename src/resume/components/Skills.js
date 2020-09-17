import React from 'react'
import styled from 'styled-components'
import { Subtitle, ContainerSection } from './common'

function Skills(props) {
  const { title, skills } = props.skills
  return (
    <ContainerSection>
      <Subtitle title={title} />
      <ContainerSkills>
        {skills.map(skill => {
          const { id, name } = skill
          return (
            <SkillContainer key={id}>
              <span>{name}</span>
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
  margin-bottom: 0.5rem;
`

export default Skills
