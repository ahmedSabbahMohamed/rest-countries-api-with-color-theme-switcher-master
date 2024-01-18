import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? "dark": ""}>
      <Header handleClick={() => setDarkMode(!darkMode)}/>
      <Main />
    </div>
  );
}

export default App
