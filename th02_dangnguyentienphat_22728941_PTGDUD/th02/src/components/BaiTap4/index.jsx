import { useState } from "react";

function BaiTap4() {

    const [language, setlanguage] = useState("");

    const handleClick = (e) => {
        setlanguage(e.target.innerHTML);
    }
    return (
        <>
            <span>bai tap 4</span>
            <div>
                <button onClick={handleClick}>Java</button>
                <button onClick={handleClick}>Python</button>
            </div>
            <div>
                <button onClick={handleClick}>Dotnet</button>
                <button onClick={handleClick}>C++</button>
            </div>
            <br />
            <span>{language}</span>
        </>
    )
}

export default BaiTap4;