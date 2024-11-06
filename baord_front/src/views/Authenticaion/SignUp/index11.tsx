import React, { useState } from 'react'

interface UserInfo {
  email: string;
  password: string;
  comfirmPassword: string;
}

interface Errors {
  email?: string;
  password?: string;
  confirmPassword?: string;
  form?: string; // 전체 폼 오류 메시지 (EX: 서버 오류 등)
}

export default function Signup() {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    email: "",
    password: "",
    comfirmPassword: ""
  })

  const [error, setErrors] = useState<Errors>({});

  return (
    <div>index11</div>
  )
}
