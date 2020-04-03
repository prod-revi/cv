import React from "react";
import styled, { css } from "styled-components"

function Subtitle(props) {
  const { title, withoutBackground } = props;
  return (
    <SubtitleContainer>
      <SubtitleElement withoutBackground={withoutBackground}>{title}</SubtitleElement>
    </SubtitleContainer>
  );
}

const SubtitleContainer = styled.div`
  margin: 0;
  text-align: left;
  margin-bottom: 20px;
`;

const SubtitleElement = styled.h3`
  margin: 0;
  width: fit-content;
  padding: 10px;
  width: 120px;
  text-align: center;

  background-color: #ffffff5e;
  border-radius: 25px;

  ${props => !props.withoutBackground && css`
    background-color: #1fc8db54;
    background-image: linear-gradient(
      141deg,
      #3ee69ca6 0%,
      #1fc8db78 51%,
      #289cff9e 75%
    );

    -webkit-box-shadow: 0px 0px 24px -7px rgba(78, 94, 204, 1);
    -moz-box-shadow: 0px 0px 24px -7px rgba(78, 94, 204, 1);
    box-shadow: 0px 0px 24px -7px rgba(78, 94, 204, 1);

    -webkit-border-radius: 25px;
    -moz-border-radius: 25px;
  `}
`;

function ContainerSection (props) {
  return (
    <ContainerSectionStyle>
      {props.children}
    </ContainerSectionStyle>
  )
}

const ContainerSectionStyle = styled.div`
  padding: 25px;
`

export { Subtitle, ContainerSection };
