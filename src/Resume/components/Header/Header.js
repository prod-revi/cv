import React from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setAuthentication } from '../../redux/actions/session.actions'

import fakeAuth from '../../core/utils/Authorization'

import logo from '../static/leon.svg'
import ButtonPrintSvg from '../static/ButtonPrint.svg'

const Header = () => {
  return (
    <ContainerHeader>
      <ContainerImg>
        <Image src={logo} alt='logo' />
      </ContainerImg>
      <ButtonPrint />

      <ContainerUser>
        <AuthButton />

        <ul>
          <li>
            <Link to='/public'>Public Page</Link>
          </li>
          <li>
            <Link to='/protected'>Protected Page</Link>
          </li>
        </ul>
      </ContainerUser>
    </ContainerHeader>
  )
}

const ButtonPrint = () => {
  function handleClick() {
    window.print()
  }
  return (
    <ButtonPrintStyle onClick={handleClick}>
      <img src={ButtonPrintSvg} alt='Button Print' />
    </ButtonPrintStyle>
  )
}

const ButtonPrintStyle = styled.button`
  height: 3.5rem;
  border: none;
  cursor: pointer;
  border-radius: 50%;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`

function AuthButton() {
  let history = useHistory()
  const dispatch = useDispatch()
  const session = useSelector(state => state.session)

  function signout() {
    dispatch(setAuthentication(false))
    fakeAuth.signout(() => history.push('/'))
  }

  return session.authenticated ? (
    <p>
      Welcome! <button onClick={signout}>Sign out</button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
}

const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media print {
    display: none;
  }
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

const ContainerUser = styled.div`
  display: none;
`

export default Header
