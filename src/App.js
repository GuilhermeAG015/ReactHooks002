import React from "react";
import Forms from "./components/Forms/Forms";
import {Container, Typography } from "@material-ui/core"
import 'fontsource-roboto';

import './App.css';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center" >Formulário de cadastro</Typography>
      <Forms OnSubmitForm={OnSubmitForm} CpfIsValid={CpfIsValid} />
    </Container>
    );
}

function OnSubmitForm(dados){
  console.log(dados);
}

function CpfIsValid(cpf){
  if(cpf.length !== 11){
    return {valido:false, texto:"CPF deve ter 11 digitos."}
  }else{
    return {valido:true, texto:""}
  }
}

export default App;