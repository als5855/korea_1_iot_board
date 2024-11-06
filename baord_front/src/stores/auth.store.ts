//zutand 파일명 권장
// : 전역상태관리할 데이터명.store.ts
// ex) user.stroe.ts

import { create } from "zustand";

// * interface *//
// # 인증 상태에 저장할 사용자 interface 정ㅜㅏ
interface User {
  id: number;
  name: string;
}

// # 상태 인터페이스 interface 정의 //
interface AuthStoreType {
  // 상태 필드 정의
  isAuthenticated: boolean; // 인증 여부를 나타냄
  // user: { id: number; name: string} | null;
  user: User | null;// 사용자 정보를 담은 객체 또는 null

  // 상태 업데이트 함수
  login: (user: User) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStoreType>((set) => ({
  // 상태 필드 초기화
  isAuthenticated: false,
  user: null,

  login: (user) => set({ isAuthenticated: true, user }),
  logout: () => set({ isAuthenticated: false, user: null }),
}));

export default useAuthStore;



