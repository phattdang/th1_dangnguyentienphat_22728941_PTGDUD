import { useState } from "react";

function BaiTap3() {

    const [aValue, setAValue] = useState(0);
    const [bValue, setBValue] = useState(0);
    const [result, setResult] = useState();
    const [op, setOp] = useState("");

    const handleInputA = (e) => {
        setAValue(e.target.value);
    }
    const handleInputB = (e) => {
        setBValue(e.target.value);
    }
    const handleInputResult = (e) => {
        if (op === '+') setResult(parseInt(aValue) + parseInt(bValue));
        else if (op === '-') setResult(parseInt(aValue) - parseInt(bValue));
        else if (op === '*') setResult(parseInt(aValue) * parseInt(bValue));
        else if (op === '/') setResult(parseInt(aValue) / parseInt(bValue));
    }
    const getOp = (e) => {
        setOp(e.target.value);
        console.log(op);
    }

    return (
        <>
            <span>bai tap 3</span>
            <br />
            <input onChange={handleInputA} placeholder="a" type="text" />
            <br />
            <input onChange={handleInputB} placeholder="b" type="text" />
            <br />
            <div>
                <input onChange={getOp} type="radio" name="op" id="" value={"+"} /> <span>+</span>
                <input onChange={getOp} type="radio" name="op" id="" value={"-"} /> <span>-</span>
            </div>
            <div>
                <input onChange={getOp} type="radio" name="op" id="" value={"*"} /> <span>*</span>
                <input onChange={getOp} type="radio" name="op" id="" value={"/"} /> <span>/</span>
            </div>
            <button onClick={handleInputResult} >calculate</button>
            <br />
            <input value={result} placeholder="result" type="text" />
        </>
    )
}

export default BaiTap3;