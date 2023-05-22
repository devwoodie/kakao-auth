import React, {useState, useEffect} from "react";

const Complete = () => {

    const [userId, setUserId] = useState();
    const [userNick, setUserNick] = useState();
    const [profileImg, setProfileImg] = useState();

    // const getProfile = async () => {
    //     try{
    //         let data = await window.Kakao.API.request({
    //             url: "/v2/user/me",
    //         });
    //         console.log(data)
    //         setUserId(data.id);
    //         setUserNick(data.properties.nickname);
    //         setProfileImg(data.properties.profile_image);
    //     }catch (err) {
    //         console.log(err);
    //     }
    // }
    //
    // useEffect(() => {
    //     getProfile();
    // }, []);

    return(
        <>
            <div className="comp-text">회원가입 완료</div>
            <p className="sm-text">[ 회원 정보 ]</p>
            <ul className="user-info">
                <li><img src={profileImg} /></li>
                <li>이름 : <span>{userNick}</span></li>
                <li>아이디 : <span>{userId}</span></li>
                <li>사용자 코드 : <span>sdfdddsdfasdfgasrgargarwegsdfdddsdfasdfgasrgargarwegsdfdddsdfasdfgasrgargarwegsdfdddsdfasdfgasrgargarweg</span></li>
            </ul>
        </>
    )
}

export default Complete;