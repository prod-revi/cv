import React from 'react'
import styled from 'styled-components'
import { Subtitle, ContainerSection } from '../common'

function Social(props) {
  const { social } = props
  return (
    <ContainerSection>
      <Subtitle title="Social" withoutBackground />
      <ContainerSocial>
        {social.map((so) => {
          const { id, media, description, link } = so
          return (
            <ItemContainer key={id}>
              <a href={link} alt={description}>
                {media}
              </a>
              <span>{description}</span>
            </ItemContainer>
          )
        })}
      </ContainerSocial>
    </ContainerSection>
  )
}

const ItemContainer = styled.div`
  width: 160px;
  margin: 0 10px;
  padding: 5px;
  display: inline-block;
  border: 2px solid #6bdfdc;
  padding: 10px 10px;
  border-radius: 25px;

  a {
    color: #333;
    text-decoration: none;
  }

  span {
    display: block;
  }
`

const ContainerSocial = styled.div`
  text-align: center;
`

export default Social
