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

  const descriptionSplited = value.split(/\r\n|\r|\n/) || []

  return (
    <ContainerDescription width={sizes.offsetWidth} height={sizes.offsetHeight}>
      {availableToEdit ? (
        <textarea onChange={handleWriting} onDoubleClick={handleClickSave} value={value} />
      ) : (
        <>
          <div ref={refElement} onDoubleClick={handleClickActiveEdition}>
            {descriptionSplited.map(text => (
              <p key={Math.random() * 9}>{text}</p>
            ))}
          </div>
        </>
      )}
    </ContainerDescription>
  )
}

const ContainerDescription = styled.div`
  margin: 10px 10px 20px;

  textarea {
    white-space: pre-wrap;

    display: flex;

    outline: auto;

    border: none;
    background: transparent;
    resize: none;
    padding: 0;

    ${({ width, height }) => `
      width: ${width * 2}px;
      height: ${height}px;
    `}
  }
`
