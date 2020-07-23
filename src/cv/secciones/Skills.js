import React from "react";
import styled from "styled-components"
import { Subtitle, ContainerSection } from '../../common'

function Skills(props) {
  const { title, skills } = props.skills
  return (
    <ContainerSection>
      <Subtitle title={title} />
      <ContainerSkills>
        {skills.map((skill) => {
          const { id, name } = skill
          return (
            <SkillContainer key={id}>
              <span>{name}</span>
            </SkillContainer>
          )
        })}
      </ContainerSkills>
    </ContainerSection>
  );
}

const ContainerSkills = styled.div`
  display: flex;
  justify-content: space-evenly
`

const SkillContainer = styled.div`
  margin: 5px;
  display: inline-block;
  border: 2px solid #6bdfdc;
  padding: 10px 10px;
  border-radius: 25px;
  min-width: 100px;
  text-align: center
`


export default Skills;
