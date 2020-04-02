import React from 'react'
import styled from 'styled-components'

function Experiences (props) {
  const {experiences} = props
  return (
    <ExperiencesContainer>
      <h3>Experience</h3>
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
    </ExperiencesContainer>
  )
}

const ExperiencesContainer = styled.div`
`

const ExperienceContainer = styled.div`
display: block;
margin: 10px;
`

export default Experiences