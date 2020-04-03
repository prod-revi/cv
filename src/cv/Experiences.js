import React from 'react'
import styled from 'styled-components'
import { Subtitle, ContainerSection } from '../common'


function Experiences (props) {
  const {experiences} = props
  return (
    <ContainerSection>
      <Subtitle title="Experience" withoutBackground />
      <>
        {experiences.map((experience) => {
          const {id, title, date, company, description} = experience
          return (
            <ExperienceContainer key={id}>
              {title}
              {date}
              {company}
              {description}
            </ExperienceContainer>
          )
        })}
      </>
    </ContainerSection>
  )
}

const ExperienceContainer = styled.div`
display: block;
margin: 10px;
`

export default Experiences