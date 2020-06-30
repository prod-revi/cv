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
  box-shadow: 0 1px 2px rgba(107, 223, 220,0.07), 
                0 2px 4px rgba(107, 223, 220,0.07), 
                0 4px 8px rgba(107, 223, 220,0.07), 
                0 8px 16px rgba(107, 223, 220,0.07),
                0 16px 32px rgba(107, 223, 220,0.07), 
                0 32px 64px rgba(107, 223, 220,0.07);
`

const SectionColor = styled.div`
  /* background-color: #6bdfdc; */
`

export default Cv