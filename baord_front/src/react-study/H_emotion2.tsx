import { css } from '@emotion/react'
import React from 'react'
/** @jsxImportSource @emotion/react */

const containerStyle = css`
  display: flex;
  flex-direction: column; //
  
  justify-content: center;// 메인축을 따라 정렬
  align-items: center; // 메인축의 수직축을 따라 정렬(x축)
  
  height: 100vh;
  padding: 20px;
  gap: 20px;
  background-color: #f5f5f5;
`;

const sectionStyle = (isReverse: boolean) => css`
  display: flex;//기본축이 x축
  flex-direction: row;
  justify-content: ${isReverse ? 'flex-end': 'flex-start'};
  align-items: center;
  gap: 10px;

  width: 80%;
  height: 80px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: ${isReverse ? '#d0e9ff' : '#ffebee'};
  transition: flex-direction 0.3s;
  padding: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const itemStyel = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: #bbdefb;
  color: #fff;
  border-radius: 50%;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
    background-color: #bbdefb;
  }
`;

const dataStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  background-color: #bbdefb;
  color: #333;
  font-weight: bold;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s back-color 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const idStyle = css`
  font-size: 1.2em;
  color: #555
`;

const contentStyle =css`
  font-size: 1em;
  color: #ccc;
`;

export default function H_emotion2() {
  const data =[
    {id: 1, content: '보라돌이'},
    {id: 2, content: '뚜비'},
    {id: 3, content: '나나'},
    {id: 4, content: '뽀'},
  ]

  return (
    <div css={containerStyle}>
        <div css={sectionStyle(false)}>
          <div css={itemStyel}>A1</div>
          <div css={itemStyel}>A2</div>
          <div css={itemStyel}>A3</div>
        </div>
        <div css={sectionStyle(true)}>
          <div css={itemStyel}>B1</div>
          <div css={itemStyel}>B2</div>
          <div css={itemStyel}>B3</div>
          <div css={itemStyel}>B4</div>
          <div css={itemStyel}>B5</div>
        </div>
        <div css={sectionStyle(false)}>
          <div css={itemStyel}>C1</div>
          <div css={itemStyel}>C2</div>
          <div css={itemStyel}>C3</div>
          <div css={itemStyel}>C4</div>
        </div>

        {data.map(item => (
          <div css={dataStyle}>
            <div css={idStyle}>ID: {item.id}</div>
            <div css={contentStyle}>{item.content}</div>
          </div>
        ))}
    </div>

  )
}
