import React from 'react'
import { default as data } from './base_de_datos/cv.json';
import Head from './secciones/Head'
import About from './secciones/About'
import Skills from './secciones/Skills'
import Experiences from './secciones/Experiences'
import Educations from './secciones/Educations'
import Social from './secciones/Social'
import Projects from './secciones/Projects'
import styled from 'styled-components'

import Router from './tools/router'

function Cv () {
  // Lazy Objects
  const { head, about, skills, experiences, educations, projects, social } = data

  // Aqui nos decidimos
  // entonces carga cv o se prepara para ser editada
  // miramos si tiene el nombre
  // router

  return <Router />


  // aqui se asegura de que puede utilizar los ?


  // Afuera o adentro papa pero en los dos lados no

  // asi que a laburar se dijo

  // return (
    
  //   <BackgroundContainer>
  //     <CvContainer>
  //       <Head head={head} />
  //       <About about={about} />
  //       <Skills skills={skills} />
  //       <Experiences experiences={experiences} />
  //       <Educations educations={educations} />
  //       <Projects projects={projects} />
  //       <Social social={social} />
  //     </CvContainer>
  //   </BackgroundContainer>
  // )
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

  @media (max-width: 800px) {
    width: 100%;
  }
  
`

export default Cv