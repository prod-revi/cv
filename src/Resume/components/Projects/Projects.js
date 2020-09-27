import React from 'react'
import { Subtitle } from '../common'
import styled from 'styled-components'

const Projects = ({ projects }) => {
  const { title, items } = projects
  return (
    <Container>
      <Subtitle title={title} withoutBackground />
      <>
        {items.map(i => {
          const { url, title, description } = i
          return (
            <ContainerProject key={Math.random()}>
              {/* eslint-disable-next-line react/jsx-no-target-blank */}
              <a href={url} target='_blank'>
                <svg fill='currentColor' viewBox='0 0 20 20'>
                  <path
                    fillRule='evenodd'
                    d='M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z'
                    clipRule='evenodd'></path>
                </svg>
                {title}
              </a>
              <p>{description}</p>
            </ContainerProject>
          )
        })}
      </>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`

const ContainerProject = styled.div`
  padding: 10px;
  border-bottom: 1px solid #6bdfdc;

  a {
    color: #333;
    text-decoration: none;
    font-weight: 500;

    &:hover,
    &:active,
    &:focus {
      font-weight: 600;
      color: #6bdfdc;
    }

    svg {
      color: #6bdfdc;
      width: 17px;
      margin-right: 11px;
      position: relative;
      top: 1px;
    }
  }

  &:last-child {
    border-bottom: none;
  }
`

export default Projects
