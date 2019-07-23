import React,{Component} from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

export default class ButtonLink extends Component{
    render(){
        return(
            <Link to={this.props.caminho} className={this.props.classe}>
                {this.props.text}
            </Link>
        );
    }
}
