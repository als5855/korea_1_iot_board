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

interface LoginState {
  email: string;
  password :string;
}

export default function UseState() {
  const [count, setCount] = useState<number>(0);
  const [loginState, setLoginState] = useState<LoginState>({
    email: '',
    password: ''
  });

  const {email, password} = loginState; // 구조분해 할당


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
  const handleInptuChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} =e.target;
      //e : 이벤트 객체
    setLoginState((prevState) => ({
      //이메일 input창만  이벤트 발생시 이전의 이메일, 패스워드를 모두 가져와 
      ...prevState, 
      
      // 현재 변화가 일어나고 있는 name(email)에 value(입력값)를 넣어 업데이트
      
      // password는 이전에 값을 그대로 가지고 있음 
      [name]: value //(입력한 값중 중복되는 것은 마지막 값을 전달해줘로 일단 기억하자)
    }));
  } 

// "."peropersicte?? 객체.속성 ex) login.email

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={handleIncrementBtn}>증가</button>
      <hr />
      <form>
        <div>
          <label htmlFor="email">이메일</label>
          <input 
            type="email"
            id = 'email'
            name='email'// 정적 요소의 이름 개발자가 지정한 이름
            value={email}//동적 사용자가 지정한 이름
            onChange={handleInptuChange}
            placeholder='이메일을 입력하세요.'
            required
          />
        </div>
        <div>
          <label htmlFor="password">패스워드</label>
          <input 
            type="password"
            id = 'password'
            name='password'
            value={password}
            onChange={handleInptuChange}
            placeholder='비밀번호를 입력하세요.'
            required
          />
          <br />
          <button type='submit'>로그인</button>
        </div>
      </form>
      </div>
  )
}
