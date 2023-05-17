import React from "react";

const KakaoAuthHandler = () => {

    let code: any = new URL(window.location.href);
    let userCode: any = code.searchParams.get("code");
    console.log(code)
    return(
        <>
            <div className="comp-text">회원가입 완료</div>
            <div className="user-code">[ 회원 인가 코드 ]<p>{userCode}</p></div>
        </>
    )
}

export default KakaoAuthHandler;