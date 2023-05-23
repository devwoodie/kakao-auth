import React, {useEffect} from 'react';
import './App.css';
import './reset.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import KakaoLogIn from "./components/KakaoLogIn";
import Complete from "./components/Complete";
import KakaoBtn from "./kakao_login_medium_narrow.png";

function App() {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://developers.kakao.com/sdk/js/kakao.js";
        script.async = true;
        document.head.appendChild(script);
        console.log(script)
    }, [])

    const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
    const REDIRECT_URI: string = "http://localhost:3000/oauth";
    const KAKAO_AUTH_URL: string = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    return (
        <div className="App">
            <h2 className="title">Kakao Auth</h2>
            <h5 className="sub-title">카카오톡 로그인 구현하기</h5>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Link className="btn" to={KAKAO_AUTH_URL}><img src={KakaoBtn} alt="kakao_btn" /></Link>} ></Route>
                    <Route path="/oauth" element={<KakaoLogIn />}></Route>
                    <Route path="/comp" element={<Complete />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
