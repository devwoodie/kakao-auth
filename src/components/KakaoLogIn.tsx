import React, {useEffect} from "react";

import qs from "qs";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const KakaoLogIn = () => {

    const navigate = useNavigate();

    const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
    const REDIRECT_URI: string = "http://localhost:3000/oauth";
    const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

    const code = new URL(window.location.href).searchParams.get("code");

    const getToken = async (): Promise<void> => {
        const payload = qs.stringify({
            grant_type: "authorization_code",
            client_id: REST_API_KEY,
            redirect_uri: REDIRECT_URI,
            code: code,
            client_secret: CLIENT_SECRET,
        });

        try{
            const res = await axios.post(
                "https://kauth.kakao.com/oauth/token",
                payload,

            )
            console.log(res)
            // window.Kakao.init()
            // window.Kakao.init(REST_API_KEY);
            // access token 설정
            // window.Kakao.Auth.setAccessToken(res.data.access_token);
            navigate("/comp")
        }catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getToken();
    }, []);

    return null;
}

export default KakaoLogIn;