import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const increment2 = () => setCount(previousCount => previousCount + 1)
  const decrement2 = () => setCount(previousCount => previousCount - 1)
  const doubleCount = () => setCount(previousCount => previousCount * 2)
  const devideCount3 = () => setCount(previousCount => {
    if (previousCount % 3 === 0) {
      return (
        previousCount / 3
      );
    }
    else {
      return (
        previousCount
      );
    }
  })
  const devideCount3_2 = () => setCount(previousCount => {
    return (
      previousCount % 3 === 0 ? previousCount / 3 : previousCount
    )
  })
  const resetCount = () => setCount(0)

  return (
    <React.Fragment>
      <div className="">
        count: {count}
      </div>
      <div className="">
        <button className="" onClick={increment}>
          +1
        </button>
        <button className="" onClick={decrement}>
          -1
        </button>
      </div>
      <div className="">
        <button className="" onClick={increment2}>
          +1
        </button>
        <button className="" onClick={decrement2}>
          -1
        </button>
      </div>
      <div className="">
        <button className="" onClick={doubleCount}>
          ×2
        </button>
      </div>
      <div className="">
        <button className="" onClick={devideCount3}>
          ３の倍数の時だけ３で割る
        </button>
      </div>
      <div className="">
        <button className="" onClick={devideCount3_2}>
          ３の倍数の時だけ３で割る
        </button>
      </div>
      <div className="">
        <button className="" onClick={resetCount}>
          Reset
        </button>
      </div>
    </React.Fragment>
  );
}

export default App;
