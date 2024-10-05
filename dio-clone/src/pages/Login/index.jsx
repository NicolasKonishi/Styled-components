import { Link } from "react-router-dom";
import {MdEmail, MdLock} from 'react-icons/md';
import{Button} from "../../components/Button";
import{Header} from "../../components/Header";
import{Input} from "../../components/Input";


import {Column, Container,CreateText,ForgotText,Row,SubtitleLogin,Title,TitleLogin,Wrapper} from "./styles";

const Login = () => {
    return (<>
        <Header />
      <Container>
        <Column>
            <Title>
              A plataforma para você aprender com experts,
               dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
            </Title>
        </Column>
        <Column>
          <Wrapper>
           <TitleLogin>Faça seu cadastro</TitleLogin>
           <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
           <form>
              <Input placeholder='E-mail' leftIcon={<MdEmail/>}/>
              <Input placeholder='Password' type='password' leftIcon={<MdLock/>}/>
              <Button title='Entrar' variant="secondary" type='button'/>
           </form>
           <Row>
            <ForgotText>Esqueci minha senha</ForgotText>
            <CreateText>Criar conta</CreateText>
           </Row>
          </Wrapper>
        </Column>
      </Container>
    </>)
}

export {Login}