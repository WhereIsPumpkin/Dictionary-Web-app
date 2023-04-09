import { useState } from "react";
import Header from "./Header.jsx";
import Input from "./Input.jsx";
import Info from "./Info.jsx";
import "./reset.css";

function App() {
  const [font, setFont] = useState("inter");
  const [data, setData] = useState(" ");
  const [errorOccurred, setErrorOccurred] = useState(false);
  const [showdata, setShowData] = useState(false);
  return (
    <>
      <Header font={font} setFont={setFont} />
      <Input
        font={font}
        setFont={setFont}
        setData={setData}
        setShowData={setShowData}
        setErrorOccurred={setErrorOccurred}
      />
      <Info
        font={font}
        setFont={setFont}
        data={data}
        showdata={showdata}
        errorOccurred={errorOccurred}
      />
    </>
  );
}

export default App;
