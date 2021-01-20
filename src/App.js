import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1);
  }
  const decrement = () => {
    setCount(count - 1);
  }

  const increment2 = () => {
    setCount(
      (previousCount) => previousCount + 1
    );
  }
  const decrement2 = () => {
    setCount(
      (previousCount) => previousCount - 1
    );
  }

  const double = () => {
    setCount(
      (previousCount) => previousCount * 2
    );
  }

  const devideThree = () => {
    setCount((previousCount) => {
      if (previousCount % 3 == 0) {
        return previousCount / 3
      } else {
        return previousCount
      }
    });
  }

  const countReset = () => {
    setCount(0);
  }

  return (
    <div className="">
      <p className="">
        count: {count}
      </p>
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
        <button className="" onClick={double}>
          ×2
        </button>
        <button className="" onClick={devideThree}>
          3の倍数の時だけ3で割る
        </button>
      </div>
      <div className="">
        <button className="" onClick={countReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
