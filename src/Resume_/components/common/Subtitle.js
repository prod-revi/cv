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
  margin-bottom: 1.5rem;
  position: relative;
`

const SubtitleElement = styled.h2`
  margin: 0 1rem;
  font-weight: 500;
  display: inline-block;

  &:after {
    content: '';
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: #6bdfdc;
    width: 0.21rem;
  }
`

export default Subtitle
