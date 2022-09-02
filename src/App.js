import "./App.css";
import Header from "./components/Header";
import InputArea from "./components/Input";
import Todos from "./components/Todos"
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Header />
        <InputArea />
        <Todos />
      </ChakraProvider>
    </div>
  );
}

export default App;
