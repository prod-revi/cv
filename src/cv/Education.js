import React from 'react'
import styled from 'styled-components'
import { Subtitle, ContainerSection } from '../common'


function Education (props) {
  const { title, education } = props
  return (
    <ContainerSection>
      <Subtitle title="Education" withoutBackground />
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
    </ContainerSection>
  )
}

const EducationContainerItem = styled.div`
  display: block;
  margin: 10px;
`

export default Education