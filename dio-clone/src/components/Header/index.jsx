import React from 'react'

import logo from "../../assets/logo-dio.svg";

import {Button} from "../Button";
import{
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    Menuiright,
    Row,
    Column,
    Userpicture,
    Wrapper,
    MenuRight
} from "./styles";

import { ButtonContainer } from '../Button/styles';

const Header = ( ) => {
    return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt='Logo'/>
                <BuscarInputContainer>
                    <Input placeholder='Buscar...'/>
                </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
            </Row>
            <Row>
                <MenuRight href='#'>Home</MenuRight>
                <Button title="Entrar"/>
                <Button title="Cadastrar"/>
            </Row>
        </Container>
    </Wrapper>
    )
}

export {Header}