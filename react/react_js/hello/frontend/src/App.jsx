import "./App.css";
import { Box, Typography } from "@mui/material";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";

function App() {
  return (
    <Box>
      <Route path="/" exact component={Home} />
      <Route path="/chat" component={Chat} />
    </Box>
  );
}

export default App;
