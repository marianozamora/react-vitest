import { useCounterStore } from "./store/counterStore";
function App() {
  const { count, increment, decrement } = useCounterStore();

  return (
    <div className="App">
      {count}
      <header className="App-header">
        <h1>React App</h1>
      </header>
    </div>
  );
}
export default App;