import React, { useState } from "react";

const App = () => {
  const [angka, setAngka] = useState(0);
  const [text, setText] = useState("");
  const [arr, setrr] = useState([
    {
      id: 1,
      title: "This is Title",
    },
  ]);
  const [obj, setObj] = useState({
    name: "kodeakademia",
  });
  const tambah = () => {
    setAngka(angka + 1);
  };
  const kurang = () => {
    setAngka(angka - 1);
  };
  return (
    <div className="App">
      {angka}
      <button onClick={tambah}></button>
      <button onClick={kurang}></button>
    </div>
  );
};

export default App;
