import React from 'react'
import styled from 'styled-components'

function Subtitle(props) {
  const { title, children, withoutBackground } = props
  return (
    <SubtitleContainer>
      <SubtitleElement withoutBackground={withoutBackground}>
        {title && title}
        {children && children}
      </SubtitleElement>
    </SubtitleContainer>
  )
}

const SubtitleContainer = styled.div`
  margin: 0;
  text-align: left;
  margin-bottom: 20px;
`

const SubtitleElement = styled.h2`
  margin: 0;
  padding: 10px;
  font-weight: 500;
  display: inline-block;

  &:after {
    content: '';
    display: block;
    height: 2px;
    background-color: #6bdfdc;
    margin-top: 5px;
    width: 125%;
  }
`

export default Subtitle
