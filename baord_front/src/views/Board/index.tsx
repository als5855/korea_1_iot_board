import React, { useEffect, useState } from 'react'
import Pagination from '../../components/Paginatoin'
import axios from 'axios';
import { useCookies } from 'react-cookie';

interface Post {
  id:number;
  title: string;
  content: string;
  auther: string;
}

interface UserAuthData {
  id: number;
  email: string;
}

interface SignInResponseDto {
  token: string;
  user: UserAuthData;
  exprTime: number;
}

export default function Board() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [cookies] = useCookies(['token']);
  
  const fetchPosts = async (page: number)=> {
    const token = cookies.token;
  try {
        const response = await axios.get(`http://localhost:8081/api/v1/posts?page=${page}&size=4`, {// response = 응답
        // 헤더의 토큰 포함하여 전달
        headers: {
          Authorization: `Bearer ${token}`,
        }});

        const data = response.data.data;
        
        setPosts(data.content);
        setTotalPages(data.totalPages);
        
      }catch(e) {
        console.error('Failed to fetch data');
      }
      
    } 
    useEffect(() => {
      fetchPosts(currentPage);
    }, [currentPage]);

    // // # function: 로그인 성공 시 실행되는 함수
    // const signInSuccessResponse = (data: SignInResponseDto) {
    //   if (data)
    //     const {token, exprTim, user} = data;
      
    // }

    
    //# function: 인증 토근을 저장하는 함수
    // const setToekn = (token: string, exprTime: number) => {
    //   const expires = new Date(Date.now() + exprTime);
    //   setCookies('token',token, {
    //     path: '/',
    //     expires
    //   })
    // }

    const handlePageClick = (page: number) => {
    setCurrentPage(page);
  }

  const handlePreSectionClick = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage -1);
    }
  }

  const handleNextSectionClick = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <div>
      게시판 목록 화면 
      <h2>게시판 목록</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <Pagination 
      pageList={Array.from(Array(totalPages).keys())}
      currentPage={currentPage}
      handlePageClick={handlePageClick}
      handlePreSectionClick={handlePreSectionClick}
      handleNextSectionClick={handleNextSectionClick}
      />
    </div>
  )
}
