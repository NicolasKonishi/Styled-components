import { useNavigate } from "react-router-dom";
import {MdEmail, MdLock} from 'react-icons/md';
import{Button} from "../../components/Button";
import{Header} from "../../components/Header";
import{Input} from "../../components/Input";
import {api} from '../../Services/api';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


import {Column, Container,CreateText,ForgotText,Row,SubtitleLogin,Title,TitleLogin,Wrapper} from "./styles";

const schema = yup.object({
  email: yup.string().email("email não valido").required('campo obrigatorio'),
  password: yup.string().min(3,"No min 3 caracteres").required('campo obrigatorio'),
}).required();

const Login = () => {
  const navigate = useNavigate();

  const { handleSubmit, control, formState: { errors,  } } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  console.log(errors);

  const onSubmit = async formData => {
    try{
      const {data} = await api.get('users?email=${formData.email}&senha=${formData.password}');
      if(data.length ===1){

      }else{
        alert("email ou senha invalidodio")
      }
    }catch{
      alert('errorrr. tente');
    }
  };  

  // const handleClickHome = () => {
  //   navigate('/userfeed');
  // }
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
           <form onSubmit={handleSubmit(onSubmit)}>
              <Input 
              name= "email"
               control={control}
               errorMessage={errors?.email?.message}
                placeholder='E-mail' 
                leftIcon={<MdEmail/>}/>

              <Input 
              name= "password" 
              control={control} 
              errorMessage={errors?.password?.message}
              placeholder='Password' type='password' 
              leftIcon={<MdLock/>}/>
              
              <Button title='Entrar' variant="secondary"  type='submit'/>
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