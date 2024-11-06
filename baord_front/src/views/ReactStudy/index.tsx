import React from 'react'
import UseState from '../../react-study/UseState';
import UseEffect from '../../react-study/B_useEffect';
import StateEffect from '../../react-study/C_StateEffect';
import ReactCookie from '../../react-study/D_react_cookie';
import Zustand from '../../react-study/E_zustand';
import ZustandRender from '../../react-study/E_zustand_render';
import Emotion from '../../react-study/G_Emotion';
import Emotion2 from '../../react-study/H_emotion2';

export default function ReactStudy() {
  return (
    <div>
      <h2>UserState: 상태관리</h2>
      <UseState />
      <hr />
      <h2>UseEffet: 부수효과</h2>
      <UseEffect/>
      <hr />
      <h2>State & Effect: Menu 검색 구현</h2>
      <StateEffect/>
      <hr />
      <UseState/>
      <hr />
      <h2>react-cookie: 쿠키 상태 관리</h2>
      <ReactCookie />
      <hr />
      <h2>zustand: 전역 상태관리</h2>
      <Zustand/>
      <ZustandRender/>
      <hr />
      <h2>Emotion: 스타일 라이브러리</h2>
      <Emotion />
      <Emotion2 />
      <hr />
    </div>
  )
}
