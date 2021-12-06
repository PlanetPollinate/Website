import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Jumbotron({ page }) {
  let navigate = useNavigate();
  let sections = ["home", "mission", "about"];
  // let sections = ["home", "about"];

  const chooseColor = (i) => {
    if (page === i) {
      return "#fff";
    } else return "#aaa";
  };

  const changePage = (i) => {
    navigate("/" + i);
  };

  return (
    <Container>
      <div style={{ flex: 2 }} />
      <JumboContent>
        {sections.map((i) => (
          <JumboBox
            onClick={() => {
              changePage(i);
            }}
            color={chooseColor(i)}
          >
            {i.toUpperCase()}
          </JumboBox>
        ))}
      </JumboContent>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  display: flex;
  height: 8vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  /* background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.7) 0%,
    rgba(255, 255, 255, 0) 100%
  ); */
`;

const JumboContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  /* padding-bottom: 3rem; */
  justify-content: space-evenly;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const JumboBox = styled.div`
  font-size: 2.2ch;
  color: ${(props) => props.color};
  border-bottom: solid 1px ${(props) => props.color};
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
