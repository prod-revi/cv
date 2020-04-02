import React from 'react'
import styled from 'styled-components'

function Education (props) {
  const {education} = props
  return (
    <EducationContainer>
      <h3>Education</h3>
      <>
        {education.map((edu) => {
          const {school, title} = edu
          return (
            <EducationContainerItem>
              {school}
              {title}
            </EducationContainerItem>
          )
        })}
      </>
    </EducationContainer>
  )
}

const EducationContainer = styled.div``

const EducationContainerItem = styled.div`
  display: block;
  margin: 10px;
`

export default Education