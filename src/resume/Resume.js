import React from 'react'
import { default as data } from './data/cv.json'
import styled from 'styled-components'
import Loader from './components/Loader'

const Head = React.lazy(() => import('./components/Head'))
const HowIAm = React.lazy(() => import('./components/HowIAm'))
const Skills = React.lazy(() => import('./components/Skills'))
const Experiences = React.lazy(() => import('./components/Experiences'))
const Educations = React.lazy(() => import('./components/Educations'))
const Social = React.lazy(() => import('./components/Social'))
const Projects = React.lazy(() => import('./components/Projects'))

function Cv() {
  // Lazy Objects
  const { head, card, howIAm, skills, experiences, educations, projects, social } = data

  return (
    <React.Suspense fallback={<Loader />}>
      <BackgroundContainer>
        <Container>
          <Head head={head} card={card} />
          <Separator>
            <div>
              <HowIAm howIAm={howIAm} />
              <Experiences experiences={experiences} />
              <Educations educations={educations} />
            </div>
            <div>
              <Skills skills={skills} />
              <Projects projects={projects} />
              <Social social={social} />
            </div>
          </Separator>
        </Container>
      </BackgroundContainer>
    </React.Suspense>
  )
}

const BackgroundContainer = styled.div`
  background-color: #efefef;
`

const Container = styled.div`
  width: 800px;
  margin: 0 auto;
  background-color: #ffffff;
  box-shadow: 0 1px 2px rgba(107, 223, 220, 0.07), 0 2px 4px rgba(107, 223, 220, 0.07),
    0 4px 8px rgba(107, 223, 220, 0.07), 0 8px 16px rgba(107, 223, 220, 0.07),
    0 16px 32px rgba(107, 223, 220, 0.07), 0 32px 64px rgba(107, 223, 220, 0.07);

  @media (max-width: 800px) {
    width: 100%;
  }
`

const Separator = styled.div`
  display: flex;
`

export default Cv
