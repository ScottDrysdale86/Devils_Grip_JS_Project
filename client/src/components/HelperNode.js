import React from 'react'
import styled from 'styled-components';

const HelperNode = () => {
  return (
    <HintButton>❓<HintInfo>Stack Rules<br/>2,5,8,J<br/>3,6,9,Q<br/>4,7,10,K</HintInfo></HintButton>
  )
}

const HintButton = styled.div`
  background-color: #AFAFAF;
  border: solid black 3px;
  border-radius: 50px;
  height: 3vh;
  width: 2vw;
  display: flex;
  justify-content: center;
  align-items:center;
`;

const HintInfo = styled.div`
  display: none;
  position: absolute;
  background-color: #AFAFAF;
  border: solid black 3px;
  border-radius: 5px;
  opacity: 0.9;
  padding: 1%;
    ${HintButton}:hover & {
        display: block;
    }
`;

export default HelperNode