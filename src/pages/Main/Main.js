import React,{Component} from 'react'
import './Main.css';

import Input from '../../components/Input/Input';

import Button from '../../components/Button/Button';
import Item from '../../components/Item/Item';

export default class Main extends Component{
    render(){
        return(
            <div className='App2'>
                <div className='container'>
                    <div className='container-head'>
                        <h2>Cadastrar evento</h2>
                    </div>
                    <form className='container-body'>
                        <Input text='Nome do evento...' tipo='text'/>
                        <div style={{display: 'flex'}}>
                            <Input text='Preço do evento...' tipo='text'/>
                            <div style={{margin: '1.5%'}}>
                                <label style={{fontSize: '10pt', display: 'flex', justifyContent: 'center'}}>Data inicio pacote</label>
                                <Input tipo='date'/>
                            </div>
                            <div style={{margin: '1.5%'}}>
                                <label style={{fontSize: '10pt', display: 'flex', justifyContent: 'center'}}>Data fim pacote</label>
                                <Input tipo='date'/>
                            </div>
                        </div>

                        <Input tipo='text' text='URL imagem'/>
                
                        <select className='select'>
                            <option value='' selected disabled>Selecione o status de pacote...</option>
                            <option value='true'>Ativado</option>                            
                            <option value='false'>Desativado</option>
                        </select>
                        <textarea className='textarea' placeholder='Descrição...' cols='5' rows='5'></textarea>
                        
                        <Button text='Cadastrar' />
                    </form>
                </div>

                <div className='container'>
                    <div className='container-head'>
                        <h2>Todos os eventos</h2>
                    </div>
                    <div className='container-body'>
                        
                        <Item titulo='SEMANA NO VALE DO SILICIO' status='Desativado' preco='R$ 8.999,00' duracao='De 9 até 15 de Julho' /> 
                        <Item titulo='TOUR MICROSOFT' status='Ativo' preco='R$ 4.000,00' duracao='De 30 até 5 de Setembro' /> 
                        <Item titulo='GOOGLE BRASIL' status='Ativo' preco='R$ 700,00' duracao='De 30 até 5 de Setembro' /> 
                        
                    </div>
                </div>
            </div>
        );
    }
}