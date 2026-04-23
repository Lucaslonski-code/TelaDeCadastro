import { useRef } from 'react'
import React from 'react'

import {
    Title, Container, TopBackground, Form, ContainerInputs, Input, Button, InputLabel,
} from './styles'

import UsersImage from '../../assets/users.png'

function Home() {
    const inputName = useRef()
    const inputAge = useRef()
    const inputEmail = useRef()
    
    return (
        <Container>
          <TopBackground>
          <img src={UsersImage} alt="imagem-usuarios"/>
          <TopBackground/>

        <Title>Cadastrar Usuário</Title>

        <Form>
        <ContainerInputs>

            <div>
                <InputLabel>
                Nome<span>*<span/>
                <InputLabel/>
                <input type="text" placeholder="Nome do usuário" ref={inputName}/>
            <div/>

            <div>
                <InputLabel>
                Idade<span>*<span/>
                <InputLabel/>
                <input type="number" placeholder="Idade do usuário" ref={inputAge}/>
            <div/>

        <ContainerInputs/>

            <div style={{ width: '100%' }}>
                <InputLabel>
                Email<span>*<span/>
                <InputLabel/>
                <input type="text" placeholder="Email do usuário" ref={inputEmail}/>
            <div/>
        
        <Button>Cadastrar<Button/>

        <Form/>

        <Container/>  
    );
}

export default Home