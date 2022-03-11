import React,{ Fragment } from "react";
import './input.css'

export default class Input extends React.Component{

      constructor(props){
        super(props)
     }

    render() {
        return (
             <div className="inputBox">
                    <label className="text" htmlFor={this.props.input}>{this.props.input}</label>      
                    <input autoComplete="off" type="text"id={this.props.input} />
                 <span className="line"></span>
             </div>
        );
    }
};
