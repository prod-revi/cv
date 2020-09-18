import React from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setAuthentication } from '../../redux/actions/session.actions'

import fakeAuth from '../../core/utils/Authorization'

import logo from '../static/leon.svg'

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
      <svg
        id='Capa_1'
        enable-background='new 0 0 512 512'
        height='512'
        viewBox='0 0 512 512'
        width='512'
        xmlns='http://www.w3.org/2000/svg'>
        <g>
          <g>
            <g>
              <g>
                <g>
                  <g>
                    <g>
                      <g>
                        <g>
                          <circle cx='256' cy='256' fill='#ffce00' r='256' />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
          <path
            d='m512 256c0-18.324-1.926-36.199-5.585-53.433l-130.198-130.198-299.217 274.259 87.407 87.407-7.172 5.826 70.607 70.607c9.247 1.012 18.642 1.532 28.158 1.532 141.385 0 256-114.615 256-256z'
            fill='#ffa300'
          />
          <g>
            <path
              d='m409.082 358.414h-306.164c-19.008 0-34.418-15.409-34.418-34.418v-124.557c0-19.008 15.409-34.418 34.418-34.418h306.164c19.008 0 34.418 15.409 34.418 34.418v124.557c0 19.008-15.409 34.418-34.418 34.418z'
              fill='#636978'
            />
          </g>
          <g>
            <path
              d='m409.082 165.021h-152.962v193.393h152.962c19.009 0 34.418-15.409 34.418-34.417v-124.558c0-19.009-15.409-34.418-34.418-34.418z'
              fill='#414952'
            />
          </g>
          <g>
            <path d='m135.783 312.151h240.434v46.262h-240.434z' fill='#414952' />
          </g>
          <g>
            <path d='m256.12 312.151h120.097v46.262h-120.097z' fill='#23272b' />
          </g>
          <g>
            <path d='m135.783 72.369h240.434v136.181h-240.434z' fill='#414952' />
          </g>
          <g>
            <path d='m256.12 72.369h120.097v136.181h-120.097z' fill='#23272b' />
          </g>
          <g>
            <path
              d='m320.032 137.179h-128.064c-11.748 0-21.272-9.524-21.272-21.272v-43.538h170.608v43.538c0 11.748-9.524 21.272-21.272 21.272z'
              fill='#555a66'
            />
          </g>
          <g>
            <path
              d='m256.12 72.369v64.81h63.911c11.748 0 21.272-9.524 21.272-21.272v-43.538z'
              fill='#333940'
            />
          </g>
          <g>
            <path d='m101.249 274.56h309.502v25.663h-309.502z' fill='#555a66' />
          </g>
          <g>
            <path d='m256.12 274.56h154.63v25.663h-154.63z' fill='#333940' />
          </g>
          <g>
            <circle cx='116.201' cy='245.004' fill='#64e1dc' r='14.952' />
          </g>
          <g>
            <circle cx='155.744' cy='245.004' fill='#64e1dc' r='14.952' />
          </g>
          <g>
            <path d='m157.235 312.151h197.53v127.71h-197.53z' fill='#fff' />
          </g>
          <g>
            <path d='m256.12 312.151h98.645v127.71h-98.645z' fill='#e9edf5' />
          </g>
        </g>
      </svg>
    </ButtonPrintStyle>
  )
}

const ButtonPrintStyle = styled.button`
  width: fit-content;
  border: none;
  cursor: pointer;

  svg {
    height: 2rem;
    width: 2rem;
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
  background-color: #efefef;
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
