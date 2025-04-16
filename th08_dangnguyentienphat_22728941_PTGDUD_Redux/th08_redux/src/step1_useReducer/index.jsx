import { useReducer, useRef } from "react"

export default function FUseReducer(){

    var initialValue = 0;

    var aValue = useRef();
    var bValue = useRef();

    const reducer = (state, action) => {
        switch(action.type){
            case '+':{
                return Number(aValue.current.value) + Number(bValue.current.value);
            }
            case '-':{
                return Number(aValue.current.value) - Number(bValue.current.value);
            }
            case 'x':{
                return Number(aValue.current.value) * Number(bValue.current.value);
            }
            case '/':{
                return Number(aValue.current.value) / Number(bValue.current.value);
            }
        }
    }

    const [result, dispatch] = useReducer(reducer, initialValue)

    return <>
        <p className="text-5xl font-semibold mb-4">Step 1 - useReducer</p>
        <div className="calculater grid grid-cols-2 grid-rows-4 gap-5 p-3 border border-gray-500">
            <input ref={aValue} className="col-span-1 row-span-1 px-3 border border-gray-500" type="text" name="" id="" placeholder="A value"/>
            <input ref={bValue} className="col-span-1 row-span-1 px-3 border border-gray-500" type="text" name="" id="" placeholder="B value"/>
            <button onClick={()=>{
                dispatch({type:'+'})
            }} className="col-span-1 row-span-1 border border-gray-500">+</button>
            <button onClick={()=>{
                dispatch({type:'-'})
            }} className="col-span-1 row-span-1 border border-gray-500">-</button>
            <button onClick={()=>{
                dispatch({type:'x'})
            }} className="col-span-1 row-span-1 border border-gray-500">x</button>
            <button onClick={()=>{
                dispatch({type:'/'})
            }} className="col-span-1 row-span-1 border border-gray-500">/</button>
            <input value={result} className="col-span-2 row-span-1 px-3  border border-gray-500" type="text" name="" id="" placeholder="Result" readOnly/>
        </div>
    </>
}