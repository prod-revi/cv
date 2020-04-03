import React from 'react'
import styled from 'styled-components'
import { Subtitle, ContainerSection } from '../common'


function Experiences (props) {
  const { title, items} = props.experiences
  return (
    <ContainerSection>
      <Subtitle title={title} withoutBackground />
      <>
        {items.map((experience) => {
          const {id, title, date, company, description} = experience
          return (
            <ExperienceContainer key={id}>
              <span>{company}</span>
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
  display: block;
  margin: 10px 10px 20px;
  border-bottom: 1px solid #ccc;

  &:last-child {
  border-bottom: none;
  }

  span {
    margin-right: 20px;
  }
`

export default Experiences