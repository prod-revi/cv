import React from 'react'
import styled from 'styled-components'

function Social (props) {
  const {social} = props
  return (
    <>
      <h3>Social</h3>
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
    </>
  )
}


const ItemContainer = styled.div`
  margin: 10px;
  display: inline-block;
`

export default Social