import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header name="MG" color="purple" />
      <Main greet="Hi" />
      <Sidebar greet="Hello" />
    </div>
  );
}

export default App;
