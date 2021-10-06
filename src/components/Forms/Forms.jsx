import React, { useState } from 'react'
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core'

function Forms({OnTheSubmit, cpfisValid}) {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [cpf, setCpf] = useState('')
    const [promotions, setPromotions] = useState(false)
    const [news, setNews] = useState(false)
    const [error, setError] = useState({cpf:{isValid: true, text: ""}})
    
    return ( 
        <form
            onSubmit={(event) => {
                event.preventDefault()
                OnTheSubmit({name, surname, cpf, promotions, news})
            }}
        >
            <TextField 
                label='Nome'
                id='nome'
                variant='outlined'
                margin='normal'
                fullWidth
                onChange={event => setName(event.target.value)}
            />
            
            <TextField 
                label='Sobrenome'
                id='sobrenome'
                variant='outlined'
                margin='normal'
                fullWidth
                onChange={event => setSurname(event.target.value)}
            />

            <TextField 
                label='CPF'
                id='cpf'
                variant='outlined'
                margin='normal'
                fullWidth
                onChange={event => setCpf(event.target.value)}
                onBlur={(event) => {
                    const isValid = cpfisValid(event.target.value)
                    setError({cpf: isValid})
                }}
                error={!error.cpf.isValid}
                helperText={error.cpf.text}
            />

            <FormControlLabel 
            label='Promoções'
            control={
                <Switch 
                    name='Promocoes' 
                    checked={promotions} 
                    onChange={(event) => {setPromotions(event.target.checked)}} 
                    color='primary'
                />}
            />

            <FormControlLabel 
            label='Novidades'
            control={
                <Switch 
                    name='novidades'
                    checked={news} 
                    onChange={(event) => {setNews(event.target.checked)}} 
                    color='primary'
                />}
            />

            <Button variant='contained' type='submit' color='primary'>Confirmar</Button>
        </form>
    );
}

export default Forms;