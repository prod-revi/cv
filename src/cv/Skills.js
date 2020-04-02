import React from "react";
import styled from "styled-components";

function Skills(props) {
  const {skills} = props
  return (
    <SkillsContainer>
      <h3>Skills</h3>
      <SkillContainer>
        {skills.map((skill) => {
          return (
            <SkillContainer key={skill.id}>
              <span>{skill.name}</span>
            </SkillContainer>
          )
        })}
      </SkillContainer>
    </SkillsContainer>
  );
}

const SkillsContainer = styled.div`

`
const SkillContainer = styled.div`
  margin: 10px;
  display: inline-block;
`

export default Skills;
