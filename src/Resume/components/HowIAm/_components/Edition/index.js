import React from 'react'
import styled from 'styled-components'
import { useEdition } from '../../../hooks/useEdition'

export const Edition = ({ description }) => {
  const {
    availableToEdit,
    handleClickActiveEdition,
    handleClickSave,
    value,
    handleWriting,
    sizes,
    refElement
  } = useEdition(description)

  return (
    <ContainerDescription width={sizes.offsetWidth} height={sizes.offsetHeight}>
      {availableToEdit ? (
        <textarea onChange={handleWriting} onDoubleClick={handleClickSave} value={value} />
      ) : (
        <>
          <p ref={refElement} onDoubleClick={handleClickActiveEdition}>
            {value}
          </p>
        </>
      )}
    </ContainerDescription>
  )
}

const ContainerDescription = styled.div`
  margin: 10px 10px 20px;

  br {
    font-size: 1em;
    font-size: 1.5em;
  }

  p {
    margin: 0;
    white-space: pre-wrap;
  }

  textarea {
    white-space: pre-wrap;

    display: flex;

    outline: auto;

    border: none;
    background: transparent;
    resize: none;
    padding: 0;

    ${({ width, height }) => `
      width: ${width}px;
      height: ${height}px;
    `}
  }
`
