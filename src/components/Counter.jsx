import React, { useMemo, useState } from 'react'

function Counter() {3
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementCounterOne = () => {
        setCounterOne(counterOne + 1);
    }

    const incrementCounterTwo = () => {
        setCounterTwo(counterTwo + 1);
    }

    const isEven = useMemo(() => {
        for (let index = 0; index < 5000000000 ; index++);
        return counterOne % 2 === 0
    }, [counterOne])

  return (
    <div>
        <div>
            <button onClick={incrementCounterOne}>
                Count One - {counterOne}
            </button>
            <span>
                {isEven ? "Even" : "Odd"}
            </span>
        </div>
        <div>
            <button onClick={incrementCounterTwo}>
                Count Two - {counterTwo}
            </button>
        </div>
    </div>
  )
}

export default Counter