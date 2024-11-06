import React, { useEffect, useState } from 'react'
/*
! useEffect
1. 함수형 컴포넌트
2. 렌더링 될 때와 특정 상태가 변경될 때 실행되는 부수효과 처리
3. Hook

cf) 컴포넌트가 생성될 때 (마운트)
  , 컴포넌트가 제거될 때 (언마운트)
  , 특정 상태나 props가 변경될 때 호출

- 데이터 가져오기(fetching Data), 타이머 설정, 이벤트리스너 등록에 사용됨

!useEffect 사용법
- 첫 번째 인자: 부수효과
- 두 번째 인자: 의존성 배열(deps - dependencies)

useEffect(() => {
-부수효과 코드를 작성

return () => {
  - 정리(clean-up) 코드
  - 언마운트 시 실행
}
},[의존성 배열을 작성]);

cf) 의존성 배열
  : 빈 배열 - 컴포넌드가 마운트될 때 한번만 실행
  : 값이 있는 배열 - 해당 값이 변경될 때마다 실행 (여러 개 가능)
*/

export default function UseEffect() {
  const [count, setCount] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [toggleData, setToggleData] = useState<boolean>(false);

  useEffect(() => {
    // 타이머 효과를 구현
    let interval: NodeJS.Timeout | undefined;
    if(isRunning) {
      interval = setInterval(() => {
        setCount(prevSetCount => prevSetCount + 1);
      }, 1000)
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleButtonClick = () => {
    setIsRunning(prevState => !prevState);
  
  }

  const handleToggleButtonClick = () => {
    setToggleData(prevData => !prevData);
    console.log(toggleData);
  }

  //useEffect는 인자값
  // 첫 번째 인자 (effect): 부수효과 - 통신(요첨), 데이터 변경 시 동작딜 효과
  // 두 번째 인자 (deps): 이존성 배열
  // -  빈 배열인자 (deps)
  useEffect(() => {
    console.log('userEffect 화면출력');
  }, [toggleData]);//<- 의존성 배열부터 읽기
  
  return (
    <div>
      <p>Timer: {count} seconds</p>   
      <button onClick={handleButtonClick}>
        {/* 실행 중이면 'Stop'버튼으로, 실행 중이 안면 'Start'버튼*/}
        {isRunning ? 'Stop' : 'Start'}
      </button> 
        <div style={{
          backgroundColor: 'pink',
          padding: '20px'
        }}>
          <button onClick={handleToggleButtonClick}>상태변화버튼</button>
        </div>
    </div>
  )
}
