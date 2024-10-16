import { useState, useEffect, useMemo, useCallback } from "react";

const Teste = () => {
  const [age, setAge] = useState(20);
  const [name, setName] = useState("Nicolas");

  const handleChangeName = useCallback(() => {
    setName((prev) => (prev === "Nicolas"? "Paulo" : "Nicolas"));
  },[]);

  const handleChangeAge= useCallback(() => {
    setAge((prev) => (prev === 20? 21 : 20));
  }, []);

  const calculo = useMemo(() => {    
    console.log("idade", age)
    return 10*age;
}, [age]);




console.log("rendezirou", calculo);


  useEffect(() => {
    handleChangeAge();
    handleChangeName();

  }, []);

  return (
    <div>
      <p>Idade {age}</p>
      <br /><br />
      <p>Nome {name}</p>
      <br /><br />

      <button onClick={handleChangeName}>Alterar nome</button>
      <button onClick={handleChangeAge}>Alterar idade</button>

    </div>
  );
};

export { Teste };
