import Forms from './components/Forms/Forms';
import './styles/App.css';

import { Container, Typography } from '@material-ui/core'
import 'fontsource-roboto'

function App() {
  return (
    <Container component='article' maxWidth='sm'>
      <Typography 
        variant='h3' 
        component='h1' 
        align='center'
        >
          Formulario de Cadastro</Typography>
      <Forms OnTheSubmit={OnSubmit} cpfIsValid={cpfIsValid}/>
    </Container>
  );
}

function OnSubmit(data) {
  console.log(data)
}

function cpfIsValid(cpf) {
  if(cpf.length !== 11){
    return {isValid:false, text: "CPF deve ter 11 digitos"}
  }
  else{
    return{isValid: true, text: ""}
  }
}

export default App;
