import React, { Component, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import PropTypes from 'prop-types';

let Example = (props) => {
  let [contador, setContador] = useState(0);

  useEffect(() => {
    console.log('naci');
  }, []);

  useEffect(() => {
    console.log('actualice');
  });

  useEffect(() => {
    return () => {
      alert('Bye!');
    };
  });
  return (
    <>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>suma</button>
    </>
  );
};

class App extends Component {
  static defaultProps = {
    name: 'Cody',
  };

  static propTypes = {
    name: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      updatedAt: null,
      intv: null,
    };

    this.updateCounter = this.updateCounter.bind(this);
  }

  componentDidMount() {
    console.log('he nacido');
    /*     let intervalo = setInterval(
      () => this.setState({ count: this.state.count + 1 }),
      1000
    );

    this.setState({
      intv: intervalo,
    }); */
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    /* console.log(prevState, this.state, snapshot);
    console.log('fui updateado');
    if (prevState.count !== this.state.count) {
      this.setState({
        updatedAt: new Date(),
      });
    } */
  }

  getSnapshotBeforeUpdate() {
    console.log('Antes del DOM');
    return 3;
  }

  componentWillUnmount() {
    //alert('Bye');
    //clearInterval(this.state.intv);
  }

  updateCounter() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <>
        <p>Contador: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          suma
        </button>
      </>
    );
  }
}

const root = createRoot(document.getElementById('root'));

root.render(<Example />);
