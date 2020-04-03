import React from 'react'
import { default as data } from './cv.json';
import Head from './Head'
import About from './About'
import Skills from './Skills'
import Experiences from './Experiences'
import Education from './Education'
import Social from './Social'
import styled from 'styled-components'

function Cv () {
  const { head, about, skills, experiences, education, social } = data
  return (
    <BackgroundContainer>
      <CvContainer>
        <Head head={head} />
        <About about={about} />
        <Skills skills={skills} />
        <SectionColor>
          <Experiences experiences={experiences} />
          <Education education={education} />
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
`

const SectionColor = styled.div`
  background-color: #6bdfdc;
`

export default Cv