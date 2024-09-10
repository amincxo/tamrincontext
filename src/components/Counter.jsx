import { useReducer } from "react"

const initialValue = {counter1: 0 , counter2: 0}

const reducer = (state , action ) => {
    
    switch (action) {
        case "INCRESE":
            return {...state , counter1: state.counter1 + 1};
        case "REST":
            return {...state , counter1: 0};
        case "DECRESE":
            return {...state , counter1: state.counter1 - 1};
        default :
            throw new Error("Invalid Action") 
    }
    
}

function Counter() {
    const [state , dispatch] = useReducer( reducer , initialValue);
    const [state1 , dispatch1] = useReducer( reducer , initialValue);
  return (
    <>
    <div>
        <p> کانتر1 {state.counter1} </p>
        <button onClick={()=>dispatch("INCRESE")} >اضافه کردن</button>
        <button onClick={()=>dispatch("REST")} >ریست</button>
        <button onClick={()=>dispatch("DECRESE")} > کم کردن</button>
    </div>
    <hr />
    <div>
        <p> {state1.counter1}  دومین کانتر </p>
        <button onClick={()=>dispatch1("INCRESE")} > کم کردن</button>
        <button onClick={()=>dispatch1("REST")} >ریست</button>
        <button onClick={()=>dispatch1("DECRESE")} >اضافه کردن</button>
    </div>
    </>
  )
}

export default Counter