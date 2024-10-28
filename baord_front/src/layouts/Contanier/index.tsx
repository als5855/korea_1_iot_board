import React from 'react'
import { Outlet } from 'react-router-dom'


/*
! Outlet 컴포넌트
: 라우트 계층구조에서 상위 라우드이 자식 컴포넌트 렌더링 역할
- Outlet이 위치한 곳에 자식 라우트가 표시
- 상위 라우트의 에이아웃을 공통으로 사용 + 자식 라우트만의 컴포넌트를 레더링
*/
export default function Container() {
  return (
    <>
    {/* <Header/> */}
    {/* 자식 컴포넌트가 해당 위치에서 렌더링 */}
    <Outlet/> 
    {/* <Footer/> */}
    </>
  )
}
