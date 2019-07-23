import React,{Component} from 'react';
import './Button.css';

export default class Button extends Component{
    render(){
        return(
            <button to='/main' className='btn-primary'>
                {this.props.text}
            </button>
        );
    }
}
