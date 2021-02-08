import React, { useState } from 'react';

const App = (props) => {

  const [state, setState] = useState(props);
  const {name, price} = state;

  return (
    <React.Fragment>
      <p className="">
        現在の{name}は、{price}です。
      </p>
      <button className="" onClick={() => setState({...state, price: price + 1})}>
        +1
      </button>
      <button className="" onClick={() => setState({ ...state, price: price - 1 })}>
        -1
      </button>
      <button className="" onClick={() => setState(props)}>
        Reset
      </button>
      <input
        type="text"
        name=""
        value={name}
        placeholder=""
        className=""
        onChange={
          (e) => setState({...state, name: e.target.value})
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
