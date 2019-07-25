import React,{Component} from 'react';

import './Detalhe.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

import {Link} from 'react-router-dom';

export default class Detalhe extends Component{
    render(){
        return(
            <div className='App2'>
                <div className='container'>
                    <div className='container-head' style={{display: 'flex', flexDirection: 'row-reverse'}}>
                        <h2 style={{width: '100%'}}>Detalhe de pacote</h2>
                        <Link to='/main' style={{padding: '2% 2.5%', border: 'none', borderRadius: '20px', backgroundColor: 'white', textDecoration: 'none'}}>
                            <FontAwesomeIcon icon={faArrowLeft}/>
                        </Link>
                    </div>
                    <div className='container-body'>
                        <div>
                            <h3 className='item-titulo'>Titulo pacote</h3>
                           
                            <div className='item-status' style={{width: '45%'}}>Status</div>
                        </div>
                        <div style={{display: 'flex'}}>
                            <div style={{width: '35%', display: 'flex', padding: '5% 0', flexDirection: 'column', justifyContent: 'start'}}>
                                <div className='item-info-p1'>Preço</div>
                                <div className='item-info-p1'>Data</div>
                            </div>
                            <p style={{width: '65%', textAlign: 'justify', padding: '1% 4%'}}>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </p>

                        </div>
                        
                        <button style={{
                            backgroundColor: '#72CB2E', 
                            padding: '0.5% 4%', 
                            border: 'none', 
                            borderRadius: '5px',
                            color: 'white',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                            Ativar pacote
                        </button>
                        <button style={{
                            backgroundColor: '#F16265', 
                            padding: '0.5% 4%', 
                            border: 'none', 
                            borderRadius: '5px',
                            color: 'white',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            Desativar pacote
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}