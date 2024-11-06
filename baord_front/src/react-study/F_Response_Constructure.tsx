import axios from 'axios';
import React from 'react'

/*
! === Spring Boot의 응답 구조 ===

ResponseEntity<ResponseDto<실제응답데이터>>

1) ResponseEntity 구조
- HttpStatus: 응답의 성고, 실패 상태를 나타냄 (ㄸㅌ. 200 ok, 404 NOT FOUND, 500 INTERNER SERVER ERROR)
- HttpHeader: 응답에 포함할 추가 정보 (EX. Content-Type, Authorization 등)
- Body(본문) : 클라이언트에게 전달할 실제 데이터
              , 객체나 문자역 또는 CTP등 다앙한 데이터 타입 설정이 가능
              >> ResponseDto 형식의 "구조화된 본문을 전달(응답 데이터를감싸는 형태의 응답 구조)"

2) RsponseDto 구조
  - result(boolean): 성공, 실패에 대한 boolean 타입의 데이터
  - message(string): 성공, 실패에 대한 구체적인 메시지 전달
  - data(D): 클라이언트들에게 전달할 실제 데이터

! === 프로트엔드의 Axios 응답 처리 ===

ResponseEntity = response.data.data

1) response 구조
  : axios가 HTTP 응답을 처리한 후 반환하는 객체
  - response.status: HTTP상태 코드 (200, 204)
  - response.statusText: 상태 텍스트("OK", "Not Fount" 등)
  - response.header: 응답 설정 정보 +response.statusText
  - response.data: 서버에서 전송한 응답 데이터

  2) response.data 구조
    : 백엔드의 전체 RepsonseDto 객체를 가리킴
    - 실제 데이터를 data 필드로 감싸고 있음
*/
//--------------이론만 참고한다.

export default function F_Response_Constructure() {

  const SignInSuccessResponse = (data:any) => {

  }
  //# event handler: 로그인 버튼 클릭 이벤트 처리 함수 //
  const handleSigIn = async() => {

    const credentials = {
      email: 'test7777',
      password: 'test7777'
    };

    if (!credentials.email || !credentials.password) {
      console.log('아이디와 비밀번호 모두 입력하세요.');
      return;
    }

    try{
      const response = await axios.post(`http://localhost:8081/api/v1/auth/signIn`, credentials);

      if(response.status === 200) {
        // 응답에 대한 상태가 200(성공)일 경우
        SignInSuccessResponse(response.data.data);
      }
    } catch {
      console.log('로그인 중 문제가 발생했습니다.');
    }
  }
  return (
    <div></div>
  )
}
