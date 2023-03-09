import "./App.css";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";

function App() {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/chat" component={Chat} />
    </div>
  );
}

export default App;
