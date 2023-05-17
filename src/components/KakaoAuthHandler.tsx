import React from "react";
import Info from "./Info";

const KakaoAuthHandler = () => {

    let code: any = new URL(window.location.href);
    let userCode: any = code.searchParams.get("code");

    return(
        <>
            <Info userCode={userCode} />
        </>
    )
}

export default KakaoAuthHandler;