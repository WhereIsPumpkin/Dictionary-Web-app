import { useState } from "react";
import Header from "./Header.jsx";
import Input from "./Input.jsx";
import Info from "./Info.jsx";
import style from "./reset.module.scss";

function App() {
  const [font, setFont] = useState("inter");
  const [data, setData] = useState(" ");
  const [errorOccurred, setErrorOccurred] = useState(false);
  const [showdata, setShowData] = useState(false);
  const [dark, setDark] = useState(false);
  console.log(dark);

  return (
    <div className={`${style.mainWrapper} ${dark ? style.dark : ""}`}>
      <Header font={font} setFont={setFont} setDark={setDark} dark={dark} />
      <Input
        font={font}
        setFont={setFont}
        setData={setData}
        setShowData={setShowData}
        setErrorOccurred={setErrorOccurred}
        dark={dark}
      />
      <Info
        font={font}
        setFont={setFont}
        data={data}
        showdata={showdata}
        errorOccurred={errorOccurred}
        dark={dark}
      />
    </div>
  );
}

export default App;
