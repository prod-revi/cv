import React from 'react'
import styled from 'styled-components'
import { useEdition } from '../hooks/useEdition'

function Subtitle({ title }) {
  const {
    availableToEdit,
    handleClickActiveEdition,
    handleClickSave,
    value,
    handleWriting,
    sizes,
    refElement
  } = useEdition(title)

  return value ? (
    <SubtitleStyle>
      <Area width={sizes.offsetWidth} height={sizes.offsetHeight}>
        {availableToEdit ? (
          <textarea onChange={handleWriting} onDoubleClick={handleClickSave} value={value} />
        ) : (
          <h2 ref={refElement} onDoubleClick={handleClickActiveEdition}>
            {value}
          </h2>
        )}
      </Area>
    </SubtitleStyle>
  ) : null
}

const SubtitleStyle = styled.div`
  margin-bottom: 1.5rem;
  position: relative;
`

const Area = styled.div`
  display: flex;
  align-items: center;
  margin: 0 1rem;

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

  h2 {
    font-weight: 500;
    display: flex;

    cursor: default;
  }

  textarea {
    font-size: 1.5em;
    line-height: 1em;
    display: flex;

    outline: auto;

    border: none;
    background: transparent;
    resize: none;
    padding: 0;

    font-weight: 500;

    ${({ width, height }) => `
      width: ${width * 2}px;
      height: ${height}px;
    `}
  }
`

export default Subtitle
