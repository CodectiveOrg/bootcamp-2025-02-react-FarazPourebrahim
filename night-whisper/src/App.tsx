import "./App.css";
import Header from "./components/Header/Header.tsx";
import Toolbar from "./components/Toolbar/Toolbar.tsx";
import Result from "./components/Result/Result.tsx";
import Create from "./components/Create/Create.tsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Toolbar />
        <Result />
      </main>
      <Create />
    </>
  );
}

export default App;
