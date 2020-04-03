import React from 'react'
import styled from 'styled-components'
import { Subtitle, ContainerSection } from '../common'


function Educations (props) {
  const { title, items } = props.educations
  return (
    <ContainerSection>
      <Subtitle title={title} withoutBackground />
      <>
        {items.map((edu) => {
          const {school, title} = edu
          return (
            <EducationContainerItem>
              <span>{school}</span>
              <span>{title}</span>
            </EducationContainerItem>
          )
        })}
      </>
    </ContainerSection>
  )
}

const EducationContainerItem = styled.div`
  display: block;
  padding: 0 0 20px;
  margin: 10px 10px 20px;
  border-bottom: 1px solid #6bdfdc;

  &:last-child {
    border-bottom: none;
  }

  span {
    display: block;
  }
`

export default Educations