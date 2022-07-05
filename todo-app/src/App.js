import TodoList from "./components/TodoList";
import Form from "./components/Form";
import "./App.css";
import { Provider } from "./store/MainContext";

function App() {
  return (
    <Provider>
      <div className="App">
        <Form />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
