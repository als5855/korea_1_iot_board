import React, { useState } from 'react'

// ! useState
// 1. 함수형 컴포넌트
// 2. 상태관리
// 3. Hook

// cf) Hook  
// : 리액트 함수형 컴포넌트에서 사용할 수 있는 기능의 모음
// : 문법 체계가 "use-"로 시작



//useState(상태) 사용 방법
// const [state, setState] = useState<타입>(초기값);
// useState의 리턴값
// : [상태변수, 상태업데이트 함수]

// const 상태변수 = 초기값;
// const 상태업데이트 함수 = () => { 반환값 (익명 함수)
// }

// 구조분해 할당
// : 배열이나 객체의 속성을 변수로 쉽게 추출할 수 있도록 하는 기능

// const [a, b] = [1, 2]; 

// const {name, age } = {
//   name: "장지민",
//   age: "29"
// }

// const a = 0;
// const name = '이도경';


export default function UseState() {
  const [count, setCount] = useState<number>(0);


  // React의 체계
  // : TSX 문법 체계


  // 1. TS 내에서 HTML 작성 : ()소관호로 묶음
  // 2. HTML 내에서 TS 작성 : {} 중관호로 묶음

  const handleIncrementBtn = () => {
    // set 상태 설정함수에 전달되는 인자값으로 count 값이 업데이트
    // 이전의 상태와 연관이 없는 경우 
    // setCount(count + 1);

    // 이 전의 상태값과 연관이 있는 경우 
    // prev상태변수명
    // : 최신의 상태변수값을 가져옴
    setCount(prevCount => prevCount + 1);


  }

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={handleIncrementBtn}>증가</button>
      </div>
  )
}
