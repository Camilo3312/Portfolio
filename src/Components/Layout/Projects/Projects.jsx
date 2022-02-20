import React, {useState, useEffect} from 'react'
import { Card } from '../../Ui/Card/Card';
import './Projects.css'

const useCount = () => {
    const [counter, setCounter] = useState(0)

    const increment = (value) => setCounter(counter + value)
    const decrement = (value) => setCounter(counter - value)
    const reset = (value) => setCounter(value)
    return {
        counter,
        increment,
        decrement,
        reset
    }
}

export const Projects = () => {

    const counterA = useCount()
    const counterB = useCount()

    useEffect(()=> {
        console.log(counterB.counter);
    },[counterB.counter])
  
    return (
       <section>
           <div className='center_section_projects'>
                <Card />
                <button  onClick={()=>counterA.increment(3)}>+</button>
                <button  onClick={()=>counterA.reset(0)}>rest</button>
                <button  onClick={()=>counterA.decrement(10)}>-</button>
           </div>
                <button  onClick={()=>counterB.increment(3)}>+</button>
                <button  onClick={()=>counterB.reset(0)}>rest</button>
                <button  onClick={()=>counterB.decrement(10)}>-</button>
       </section>
    )
};
