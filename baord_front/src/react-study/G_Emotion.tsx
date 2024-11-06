import { css, Global } from '@emotion/react'
import styled from '@emotion/styled';
import React, { useState } from 'react'
/** @jsxImportSource @emotion/react */
/*
1. Emotion 라이브러리
: CSS-in-JS 스타일링을 제공하여 React 컴포넌트 스타일을 적용하는 방법

cf) CSS-in-JS
  : JS 안에서 스타일을 작성하게 해주는 방식

  2. Emotion 사용 방법
  npm install @emotion/react @emotion/styled
  : npm install @emotion/react @emotion/styled @emotion/babel-plugin <- 사용권장
  (바벡 플러그인-선택사항: 타입 지원을 위해 설치)

  3. Emotion 기본 구성
  : @emotion/react: Emotion의 핵심 패키지 css 함수와 테마 기능 등을 제공
  : @emotion/styled: styled-comonents와 유사하게 스타일링 할 수 있게 도와주는 패키지

  4. 기본 사용방법
    1) css 함수
      : css 헬퍼를 사용하여 스타일을 작성
    2) styled 함수
      : styled 함수를 사용하여 스타일을 작성
      : 해당 스타일의 컴포넌트를 반환
*/

const buttonStyle = (status: boolean) => css`
  background-color: ${status ? 'green' : 'red'};
  color: white;
`;

/*
  6. 프로젝트 초기 스타일링
  : Global styled를 사용하여 초기 컴포넌트에 대한 스타일 지정
*/
const GlobalStyles = css`
  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #a9cca9;
  }
`

const divStyle = css`
background-color: #007bff;
color: white;
padding: 8px 16px;
border: none;
border-radius: 4px;
margin: 4px;
&:hover {
  background-color: #0056ff;
}
`;

const StyledDiv = styled.div`// 해당 태그에 직접 스타일 적용
  background-color: #007bff;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  margin: 4px;
  &:hover {
    background-color: #0056ff;
}
`

const StyleBtn = css`
  background-color: aliceblue;
  padding: 10px;
  border: none;
  border-radius: 4px;
  &:hover {
    background-color: #b1c1ce;
  }
`

export default function G_Emotion() {
  const [clickBtn,setClickBtn] = useState<boolean>(false);


  const handleClick = () => {
    setClickBtn(prevBtn => !prevBtn);
  }
  return (
    <>
    <Global styles={GlobalStyles}/>
      <div css={divStyle}>
      Hello, EMTION 1
      </div>

      <StyledDiv>
      Hello, EMTION 2
      </StyledDiv>

      <hr />
      <button css={buttonStyle(true)}>HELLO DOMNIC EMOTION</button><br />
      <button css={buttonStyle(false)}>HELLO DOMNIC EMOTION</button>
      <br />
      <button 
      css={StyleBtn}
      onClick={handleClick}
      >{clickBtn ? 'change' : 'unchange'}
      </button>
      <hr />

    </>
  )
}
