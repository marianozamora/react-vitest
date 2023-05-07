import { useCounterStore } from "./store/counterStore";

//shallow to compare objects
function App() {
  const { count, increment } = useCounterStore();

  return (
    <div className="App">
      {count}
      <button onClick={increment}>+</button>
      <header className="App-header">
        <h1>React App</h1>
      </header>
    </div>
  );
}
export default App;