// import { useState } from "react";

// function Counter(){
//     const[count, setCount] = useState(0);
//     const[rCount, setrCount] = useState(0);
// return(
//     <>
//         <h2>Count: {count}</h2>
//         <h2>Count : {rCount}</h2>
//         <button onClick={()=>setCount(count + 1) }>Increase</button>
//         <button onClick={()=>setrCount(rCount-1)}>Decrease</button>
//     </>
// )
// }
// export default Counter;

import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);
    const [rCount, setrCount] = useState(0);

    return(
        <>
            <h2>Count: {count}</h2>
            <h2>Count: {rCount}</h2>

            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setrCount(rCount - 1)}>Decrease</button>
        </>
    )
}

export default Counter;