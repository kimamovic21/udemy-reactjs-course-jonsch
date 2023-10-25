import Counter from './components2/Counter';

const App2 = () => {
  return (
    <div>
      <h1>Compound Component Pattern</h1>
      {/* <Counter
          iconIncrease="+"
          iconDecrease="-"
          label="My NOT so flexible counter"
          hideLabel={false}
          hideIncrease={false}
          hideDecrease={false}
      /> */}

      <Counter>
        <Counter.Label>My super flexible counter</Counter.Label>
        <Counter.Decrease icon='-'/>
        <Counter.Count />
        <Counter.Increase icon='+' />
      </Counter>
    </div>
  );
}

export default App2;