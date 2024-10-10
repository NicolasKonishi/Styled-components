import { useState, useEffect, useMemo } from "react";

const Teste = () => {
  const [name, setName] = useState("Nicolas");

  const handleChangeName = () => {
    setName((prev) => (prev === "Nicolas" ? "Jao" : "Nicolas"));
  };

  const calculo = useMemo(() => {    
    return 10*233
}, []);

  useEffect(() => {
    handleChangeName();
  }, []);

  return (
    <div>
      <p>{name}</p>
      <button onClick={handleChangeName}>Alterar</button>
    </div>
  );
};

export { Teste };
