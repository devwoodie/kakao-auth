import React from 'react';
import './App.css';
import './reset.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import KakaoLogIn from "./components/KakaoLogIn";
import KakaoAuthHandler from "./components/KakaoAuthHandler";
import Complete from "./components/Complete";

function App() {
    return (
        <div className="App">
            <h2 className="title">Kakao Auth</h2>
            <h5 className="sub-title">카카오톡 로그인 구현하기</h5>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<KakaoLogIn />}></Route>
                    <Route path="/oauth" element={<KakaoAuthHandler />}></Route>
                    <Route path="/comp" element={<Complete />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
