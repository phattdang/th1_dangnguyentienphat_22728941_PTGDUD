import { useState } from "react";

function BaiTap2() {

    const [aValue, setAValue] = useState(0);
    const [bValue, setBValue] = useState(0);
    const [result, setResult] = useState();

    const handleInputA = (e) => {
        setAValue(e.target.value);
    }
    const handleInputB = (e) => {
        setBValue(e.target.value);
    }
    const handleInputResult = (e) => {
        setResult(parseInt(aValue) + parseInt(bValue));
        console.log(result);
    }

    return (
        <>
            <span>bai tap 2</span>
            <br />
            <input onChange={handleInputA} placeholder="a" type="text" />
            <br />
            <input onChange={handleInputB} placeholder="b" type="text" />
            <br />
            <button onClick={handleInputResult} >Get Sum</button>
            <br />
            <input value={result} placeholder="result" type="text" />
        </>
    )
}

export default BaiTap2;