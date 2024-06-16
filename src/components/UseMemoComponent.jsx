import React, { useState, useMemo } from 'react';

const UseMemoComponent = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // En beräkning som helst inte ska köras ofta, och därför så används useMemo
  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000; i++) {} //
    return num * 2;
  };

  // useMemo används för at komma ihåg resultatet. Vi vill inte behöva räkna om det
  //Det här exemplet demonstrerar att värdet inte räknas om om vi ändrar input i text
  const computedValue = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  return (
    <div>
      <p>Computed Value: {computedValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something..."
      />
    </div>
  );
};

export default UseMemoComponent;