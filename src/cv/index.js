import React from 'react'
import { default as data } from './cv.json';
import Head from './Head'
import About from './About'
import Skills from './Skills'
import Experiences from './Experiences'
import Education from './Education'
import Social from './Social'

function Cv () {
  const { head, about, skills, experiences, education, social } = data
  return (
    <>
     <Head head={head} />
     <About about={about} />
     <Skills skills={skills} />
     <Experiences experiences={experiences} />
     <Education education={education} />
     <Social social={social} />
    </>
  )
}

export default Cv