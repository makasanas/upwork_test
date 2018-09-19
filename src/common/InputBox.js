import React, { Component } from 'react';
import '../assets/css/input_box.css';

class InputBox extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="input-box">
               <div className="itemName">{this.props.title ? this.props.title:''}</div>
                <input type="text" name={this.props.name} value={this.props.value} onChange={(e)=>this.props.onUpdate(e,"inputbox")}/>
            </div>
        );
    }
}
export default InputBox;