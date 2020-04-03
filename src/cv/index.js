import React from 'react'
import { default as data } from './cv.json';
import Head from './Head'
import About from './About'
import Skills from './Skills'
import Experiences from './Experiences'
import Educations from './Educations'
import Social from './Social'
import styled from 'styled-components'

function Cv () {
  const { head, about, skills, experiences, educations, social } = data
  return (
    <BackgroundContainer>
      <CvContainer>
        <Head head={head} />
        <About about={about} />
        <Skills skills={skills} />
        <SectionColor>
          <Experiences experiences={experiences} />
          <Educations educations={educations} />
          <Social social={social} />
        </SectionColor>
      </CvContainer>
    </BackgroundContainer>
  )
}

const BackgroundContainer = styled.div`
  background-color: #efefef;
`

const CvContainer = styled.div`
  width: 800px;
  margin: 0 auto;
  background-color: #ffffff;
  border: 1px solid #ccc;
`

const SectionColor = styled.div`
  /* background-color: #6bdfdc; */
`

export default Cv