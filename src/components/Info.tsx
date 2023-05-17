import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const Info = (userCode: any) => {

    const navigate = useNavigate();

    const [name, setName] = useState("")
    const [number, setNumber] = useState("")

    const handleInput = (event: any) => {
        if(event.target.id === "name"){
            setName(event.target.value);
        }else if(event.target.id === "number"){
            setNumber(event.target.value);
        }
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if(name === ""){
            alert("이름을 입력해주세요.");
        }else if(number === ""){
            alert("전화번호를 입력해주세요.");
        }else{
            navigate("/comp");
        }
    }

    return(
        <form className="Info" onSubmit={handleSubmit}>
            <div className="input">
                <label>이름 </label>
                <input
                    type="text"
                    id="name"
                    onChange={handleInput}
                    value={name}
                />
            </div>
            <div className="input">
                <label>전화번호 </label>
                <input
                    type="text"
                    id="number"
                    onChange={handleInput}
                    value={number}
                />
            </div>
            <button className="sign-btn">회원가입</button>
        </form>
    )
}

export default Info;