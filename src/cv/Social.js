import React from 'react'
import styled from 'styled-components'
import { Subtitle, ContainerSection } from '../common'


function Social (props) {
  const {social} = props
  return (
    <ContainerSection>
      <Subtitle title="Social" withoutBackground />
      <>
        {social.map((so) => {
          const {media, description, link} = so
          return (
            <ItemContainer>
              {media}
              {description}
              {link}
            </ItemContainer>
          )
        })}
      </>
    </ContainerSection>
  )
}


const ItemContainer = styled.div`
  margin: 10px;
  display: inline-block;
`

export default Social