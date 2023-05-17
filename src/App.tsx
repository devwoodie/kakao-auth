import React from 'react';
import './App.css';
import './reset.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import KakaoLogIn from "./KakaoLogIn";
import KakaoAuthHandler from "./KakaoAuthHandler";

function App() {
    return (
        <div className="App">
            <h2 className="title">Kakao Auth</h2>
            <h5 className="sub-title">카카오톡 로그인 구현하기</h5>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<KakaoLogIn />}></Route>
                    <Route path="/oauth" element={<KakaoAuthHandler />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
