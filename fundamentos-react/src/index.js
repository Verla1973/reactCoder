import './index.css'
import ReactDom from 'react-dom'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

ReactDom.render(
    <div id="app">
        <Primeiro></Primeiro>
        <ComParametro titulo="Situação do Aluno" 
        aluno = "Eskurinho Dev "
        nota = {9.7} />
    </div>,
    document.getElementById('root')
)
