import React, { useEffect, useState } from 'react'
import useAuthStore from '../../stores/auth.store';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import useThemeStore from '../../stores/theme.store';

export default function Header() {
  //* state *//
  //# 사용자의 인증 상태를 전역 상태 관리
  const { isAuthenticated, logout } = useAuthStore();

  //# 전체태마의 상태를 전역 상태관리 //
  const {theme, toggleTheme} = useThemeStore();

  //# 사용자의 토큰을 관리하는 쿠키 //
  const [cookies, setCookies] = useCookies(['tocken']);

  //* Effect
  //# 렌더링 시 토큰을 관리하는 쿠키
  useEffect(() => {
    if (!cookies.tocken) {
      logout();
    }
  }, [cookies.tocken, logout]);

  //* Event Handler //
  //# event handler: 로그아웃 버튼 클릭시 이벤트 핸들러 //
  const handleLogoutclick = () => {
    setCookies('tocken', '', {expires: new Date()});
    logout();
  }


  return (
    <div>
      <Box display='flex' justifyContent='space-between' p ={2}>
        <Box 
        flex={1} 
        display='flex' 
        justifyContent='space-between' 
        p={2}>
          <Button variant='contained' onClick={toggleTheme}>
            {theme == 'light' ? '타크모드' : '라이트모드'}
          </Button>
        </Box>
        <Box 
        flex={1} 
        display='flex' 
        justifyContent= 'center'
        alignItems='center'
        textAlign='center'
        >
          <Link to={''} style={{
            textDecoration: 'none',
            color: 'inherit'
          }}><Typography variant='h3'>코리아IT</Typography></Link>
          </Box>
        <Box flex={1} display='flex' justifyContent='flex-end'>
          {isAuthenticated ? (
            <Typography
              variant='subtitle1'
              m={2}
              onClick={handleLogoutclick}
            >
              로그아웃
            </Typography>
          ): (
            <Link to={'/auth'}
            style={{
              textDecoration: 'none',
              color: 'inherit'
            }}
            >
              <Typography
              variant='subtitle1'
              m={2}
              >
                로그인
              </Typography>
            </Link>
          )}
        </Box>
      </Box>
      
    </div>
  )
}