import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const theme: string = localStorage.getItem("theme") ?? "";

  return (
    <div className={theme} id="app">
      <Header/>
      <Main />
    </div>
  );
}

export default App
