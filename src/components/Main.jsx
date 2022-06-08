import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { offset } from "../recoil/atoms";

export default function Main() {
  const navi = useNavigate();
  const [offsetState,setOffset] =useRecoilState(offset)
  if(offsetState===-1){
    setOffset(window.history.length - window.history.state.idx)
  }
  return (
    <div>
      <button
      disabled={window.history.state.idx===0}
        onClick={() => {
          navi(-1);
        }}
      >
        이전
      </button>
      <button onClick={() => {
        navi("/test1");
      }}>Page1</button>
      <button disabled={offsetState+window.history.state.idx===window.history.length} onClick={() => {
        
        navi(1);
      }}>다음</button>
    </div>
  );
}
