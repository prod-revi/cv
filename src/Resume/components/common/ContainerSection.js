import React from 'react'
import styled from 'styled-components'

function ContainerSection(props) {
  return <ContainerSectionStyle>{props.children}</ContainerSectionStyle>
}

const ContainerSectionStyle = styled.div`
  padding: 5rem 3rem 0 3rem;
  /* padding-top: 5rem;
  padding-bottom: 0; */
`
export default ContainerSection
