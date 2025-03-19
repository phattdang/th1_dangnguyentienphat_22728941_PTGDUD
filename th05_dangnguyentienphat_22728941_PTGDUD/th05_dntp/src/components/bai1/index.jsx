import { useRef } from "react";
import { useReducer } from "react";

export default function Bai1() {

    const INCREASE = "Increase";
    const DECREASE = "Decrease";

    const valueA = useRef(0);
    const valueB = useRef(0);

    const initialResult = {value:0};

    const reducer = (result, action) => {
        let a = parseInt(valueA.current.value);
        let b = parseInt(valueB.current.value);
        switch(action.type){
            case INCREASE:{
                return {...result, value:a+b};
            }
            case DECREASE:{
                return {...result, value:a-b};
            }
            default:{
                return result;
            }
        }
    }

    const [result, dispatch] = useReducer(reducer, initialResult);

    return (
        <>
            <div className="container border p-5">
                <div className="title">
                    <span>Ex1</span>
                </div>
                <div className="inputValue text-start">
                    <input ref={valueA} className="block" type="text" name="" id="" placeholder="Value A"/>
                    <input ref={valueB} className="block" type="text" name="" id="" placeholder="Value B"/>
                </div>
                <div className="operators flex justify-between">
                    <button onClick={()=>{
                        dispatch({type:INCREASE})
                        console.log("a ", valueA);
                        console.log("b ", valueB);
                    }}>+</button>
                    <button onClick={()=>{
                        dispatch({type:DECREASE})
                    }}>-</button>
                </div>
                <div className="result text-start">
                    <input value={"Result : " + result.value} type="text" readOnly name="" id="" placeholder="Result"/>
                </div>
            </div>
        </>
    )
}