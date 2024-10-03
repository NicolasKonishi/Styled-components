import { Link } from "react-router-dom";
import{Button} from "../../components/Button";


const Nome = () => {
    return (<>
        <h1>Home</h1>
        <Button title="teste1"/>
        <Button variant='secondary' title="teste2"/>
        <Link to="/login">Ir para o login</Link>
    </>)
}

export {Nome}