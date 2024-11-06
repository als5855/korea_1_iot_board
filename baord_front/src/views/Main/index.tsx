import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Main() {
  const navigate = useNavigate();
  const handleNavigatToBoard = () => {
    navigate('/board');
  }
  return (
    <div>
      <button onClick={handleNavigatToBoard}>
        게시판 이동
      </button>
    </div>
  )
}
