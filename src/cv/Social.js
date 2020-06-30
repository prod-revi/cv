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
          const { id, media, description, link, srcImg } = so
          return (
            <ItemContainer key={id}>
              <a href={link} >
                <ImgMedia src ={srcImg} alt={`${media} ${description}`} />
              </a>
            </ItemContainer>
          )
        })}
      </ContainerSocial>
    </ContainerSection>
  )
}

const ImgMedia = styled.img`
  width: 50px;
`

const ItemContainer = styled.div`
  width: 160px;
  margin: 0 10px;
  padding: 5px;
  display: inline-block;
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
