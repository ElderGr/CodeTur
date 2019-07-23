import React, {Component} from 'react';

import Input from '../../components/Input/Input';
import ButtonLink from '../../components/Button/ButtonLink';

import './Login.css';

export default class Login extends Component{
  render(){
    return (
      <div className="App">
        <div className='container'>
          <div className='container-head'>
            <h1>CodeTur</h1>
          </div>
          <div className='container-body'>
            <Input text='Inserir login...' tipo='text'/>
            <Input text='Senha...' tipo='text'/>
            <ButtonLink classe='btn-primary' text='Enviar' caminho='/main'/>
          </div>
        </div>
      </div>
    );
  }
}

