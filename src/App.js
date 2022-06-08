import { useEffect, useState } from "react";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Main from "./components/Main";
import Test1 from "./components/Test1";
import Test2 from "./components/Test2";

export default function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/test1" element={<Test1 />} />
          <Route path="/test2" element={<Test2 />} />
        </Routes>
        <div className="App">
          <h1>test</h1>
        </div>
      </BrowserRouter>
    </RecoilRoot>
  );
}
