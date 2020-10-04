import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'

export default () =>
    
        <div id="app">
            <h1>Fundamentos React(forma reduzida com arrow)</h1>
            <Aleatorio  min = {0} max = {60}/>
            <Fragmento />
            <ComParametro
                titulo = 'Situação do aluno'
                aluno = 'Eskurinho Dev'
                nota = {9.7}
            />
            <Primeiro></Primeiro>
        </div>