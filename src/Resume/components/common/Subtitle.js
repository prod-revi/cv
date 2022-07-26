import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const useEdition = incomingValue => {
  const refElement = useRef(null)

  const [sizes, setSizes] = useState({ offsetHeight: 0, offsetWidth: 0 })
  const [availableToEdit, setStateEdition] = useState(false)
  const [value, setValue] = useState(incomingValue)

  // overplaid

  const readSizes = () => {
    if (refElement.current) {
      const offsetHeight = refElement.current.offsetHeight
      const offsetWidth = refElement.current.offsetWidth
      setSizes({ offsetHeight, offsetWidth })
    }
  }

  // Handlers

  const handleWriting = e => {
    setValue(e.target.value)
  }

  const handleClickActiveEdition = () => {
    setStateEdition(true)
    console.log(':: andleClickActiveEdition')
  }

  const handleClickSave = () => {
    setStateEdition(false)
    setTimeout(() => {
      readSizes()
    }, 100)
    console.log(':: handleClickSave')
  }

  // Effects

  // // check the size H2
  useEffect(() => {
    // when h2 is loaded, witch size have
    readSizes()
  }, [refElement])

  return {
    availableToEdit,
    handleClickActiveEdition,
    handleClickSave,
    value,
    handleWriting,
    sizes,
    refElement
  }
}

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
