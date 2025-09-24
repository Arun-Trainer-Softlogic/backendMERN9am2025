import {useSelector , useDispatch} from "react-redux"
import { increment, decrement, reset } from "./counterSlice"



const Counter = () => {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return(
        <div style={{textAlign:"center", marginTop:"2rem"}}>
            <h1>Counter : {count}</h1>
            <div style={{display:"flex", justifyContent:"center", gap:'1rem' }}>
                <button onClick={()=> dispatch(increment())}>++</button>
                <button onClick={()=> dispatch(decrement())}>--</button>
                <button onClick={()=> dispatch(reset())}>Reset</button>
            </div>
        </div>
    )
};


export default Counter;
