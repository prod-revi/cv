import React from 'react';
import styled, { keyframes } from 'styled-components'
import logo from '../../leon.svg'

const Header = () => {
  let styleHeader = {
    
  }

  return (
    <ContainerHeader>
      <button>
        <ContainerImg>
          <Image src={logo} alt="logo" />
        </ContainerImg>
      </button>

      <MenuDesplegable />
    </ContainerHeader>
  )
}

const MenuDesplegable = () => (
  <ul>
    <li>Nombre</li>
    <li>
      <button>Log in</button>
    </li>
    <li>
      <button>Log out</button>
    </li>
  </ul>
)

const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row-reverse;
`
const ContainerImg = styled.div`
  height: 44px;
  margin: 5px 20px;
`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Image = styled.img`
  /* animation: ${rotate360} infinite 120s linear; */
  max-width: 100%;
  max-height: 100%;
  /* &:hover {
    animation: ${rotate360} infinite 1.5s linear;
  } */
`

export default Header