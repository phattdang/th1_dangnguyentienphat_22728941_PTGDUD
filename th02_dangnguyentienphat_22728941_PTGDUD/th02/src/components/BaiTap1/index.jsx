import { useState } from "react";

function BaiTap1() {

    const [name, setName] = useState("");
    const [result, setResult] = useState("");

    const handleClick = () => {
        setResult(name);
    }
    const handleChange = (e) => {
        setName(e.target.value)
    }

    return (
        <>
            <span>bai tap 1</span>
            <br />
            <input onChange={handleChange} placeholder="Your name" type="text" name="" id="" />
            <br />
            <button onClick={handleClick}>Click to say Hello</button>
            <br />
            <span>Hello {result}</span>
        </>
    )
}

export default BaiTap1;