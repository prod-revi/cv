import React from "react";
import styled from "styled-components"
import { Subtitle, ContainerSection } from '../common'

function Skills(props) {
  const { title, skills } = props.skills
  return (
    <ContainerSection>
      <Subtitle title={title} />
      <>
        {skills.map((skill) => {
          return (
            <SkillContainer key={skill.id}>
              <span>{skill.name}</span>
            </SkillContainer>
          )
        })}
      </>
    </ContainerSection>
  );
}

const SkillContainer = styled.div`
  margin: 5px;
  display: inline-block;
  border: 2px solid #6bdfdc;
  padding: 10px 10px;
  border-radius: 25px;
`

export default Skills;
