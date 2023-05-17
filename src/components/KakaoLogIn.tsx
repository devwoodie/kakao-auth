import React from "react";
import KakaoBtn from "../kakao_login_medium_narrow.png";

const KakaoLogIn = () => {

    const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
    const REDIRECT_URI: string = "http://localhost:3000/oauth";
    const KAKAO_AUTH_URL: string = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const kakaoLogin = () => {
        window.location.href = KAKAO_AUTH_URL;
    }

    return(
        <>
            <button onClick={kakaoLogin}><img src={KakaoBtn} alt="kakao_btn" /></button>
        </>
    )
}

export default KakaoLogIn;