import { useState } from "react";
import Header from "./Header.jsx";
import Input from "./Input.jsx";
import Info from "./Info.jsx";
import "./reset.css";

function App() {
  const [font, setFont] = useState("intern");

  return (
    <>
      <Header font={font} setFont={setFont} />
      <Input font={font} setFont={setFont} />
      <Info font={font} setFont={setFont} />
    </>
  );
}

export default App;
