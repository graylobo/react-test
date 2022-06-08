import React from 'react'
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from 'recoil';
import { offset } from '../recoil/atoms';
export default function Test2() {
  const navi = useNavigate();
  const offsetState = useRecoilValue(offset)

  console.log('offset',offsetState)
  return (
    <div><button
    
    onClick={() => {
      navi(-1);
    }}
  >
    이전
  </button>
  <button onClick={() => {
    navi("/");
  }}>Page1</button>
  <button 
  disabled={offsetState+window.history.state.idx===window.history.length}
  onClick={() => {
    navi(1);
  }}>다음</button></div>
  )
}
