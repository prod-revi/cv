import React from "react";
import styled from 'styled-components'

function About(props) {
  const { title, info } = props.about;
  return (
    <AboutContainer>
      <h3>{title}</h3>
      <AboutDivision>
        <div>
          {info.map((item) => {
            return (
              <div key={item.id}>
                <span>{item.key}</span>
                <span>{item.value}</span>
              </div>
            )
          })}
        </div>
        <div>
          <>
            <img href="#" alt="revi" />
          </>
          <>
            <p>I take the design and develop it into a website that works</p>
          </>
        </div>
      </AboutDivision>
    </AboutContainer>
  );
}

const AboutContainer = styled.div`
`

const AboutDivision = styled.div`
  display: flex;
  justify-content: center;

`

export default About;
