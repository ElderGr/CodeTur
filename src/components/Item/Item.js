import React, {Component} from 'react';
import './Item.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFileAlt} from '@fortawesome/free-solid-svg-icons';

import ButtonLink from '../Button/ButtonLink';

export default class Item extends Component{
    render(){
        return(
            <div className='item'>
                <div className='item-head'>
                    <h3 className='item-titulo'>{this.props.titulo}</h3>
                    {/* <button className='btn-info'>
                        <FontAwesomeIcon icon={faFileAlt} />
                    </button> */}
                    <ButtonLink text='Detalhes' classe='btn-info' caminho='/detalhe'/>
                </div>
                <div style={{display: 'flex', flexDirection:'column'}}>
                    <div className='item-status'>
                        {this.props.status}
                    </div>
                    <div style={{display: 'flex', justifyContent:'space-between', padding:'2% 3%', color:'white'}}>
                        <div>{this.props.preco}</div>
                        <div>{this.props.duracao}</div>
                    </div>
                </div>
            </div>
        );
    }
}