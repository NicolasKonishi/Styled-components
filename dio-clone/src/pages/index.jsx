import {useState} from 'react'

const Teste = () => {
    const [name, setName] = useState('Nicolas');
  
    const handleChangeName= () => {
        setName(prev => prev === 'Nicolas' ? 'Jao':'Nicolas');
    }
    return (
    <div>
        <p>
        {name}
        </p>
        <button onClick={handleChangeName}> 
            Alterar
        </button>
    </div>
  )
}

export{Teste};