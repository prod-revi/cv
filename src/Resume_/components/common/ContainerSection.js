import React from 'react'
import styled from 'styled-components'

function ContainerSection(props) {
  return <ContainerSectionStyle>{props.children}</ContainerSectionStyle>
}

const ContainerSectionStyle = styled.div`
  padding: 2rem 2rem 0.5rem;
`
export default ContainerSection
