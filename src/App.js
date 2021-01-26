import React, { useState } from 'react';

const App = (props) => {

  const [name, setName] = useState(props.name);
  const [price, setPrice] = useState(props.price);

  const reset = () => {
    setPrice(props.price)
    setName(props.name)
  }

  return (
    <React.Fragment>
      <p className="">
        現在の{name}は、{price}です。
      </p>
      <button className="" onClick={() => setPrice(price + 1)}>
        +1
      </button>
      <button className="" onClick={() => setPrice(price - 1)}>
        -1
      </button>
      <button className="" onClick={() => reset()}>
        Reset
      </button>
      <input
        type="text"
        name=""
        value={name}
        placeholder=""
        className=""
        onChange={
          (e) => setName(e.target.value)
        }
      />
    </React.Fragment>
  );
}

App.defaultProps = {
  name: '',
  price: 1000
}

export default App;
