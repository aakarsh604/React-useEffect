import React, { useEffect, useState } from 'react'

const Timer = () => {

    const [timer, settimer] = useState(5);

    useEffect(()=> {
        const id = setInterval(() => {
            if(timer<=1){
                clearInterval(id);
            }else{
                settimer((timer)=>timer-1)
            }
        }, 1000);

        return ()=> {
            clearInterval(id);
        }
    }, [timer] ) ;
  return (
    <div>Count down : {timer}</div>
  )
}

export default Timer