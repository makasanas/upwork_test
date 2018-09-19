import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUpdateUser, getUser } from '../actions/index';
import InputBox from '../common/InputBox';
import '../assets/css/app.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          key:localStorage.getItem("userId"),
          formData:{
            first_name:'',
            last_name:'',
            position:'',
            email:'',
            department:'',
            company:''
          }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.upDateData = this.upDateData.bind(this);

    }       

    componentWillMount() {
        if(localStorage.getItem("userId")){
            this.props.getUser(localStorage.getItem("userId"));
        }
    }

    handleSubmit(e) {
        if(localStorage.getItem("userId")){
          this.props.addUpdateUser(this.state.formData, localStorage.getItem("userId")).then(() => {
          });    
        }else{
          this.props.addUpdateUser(this.state.formData).then(() => {
            localStorage.setItem("userId", this.props.getUserData.key);
          }); 
        }
    }

    componentWillReceiveProps(nextProps, prevState, prevProps) {
       if (nextProps.getUserData.data !== this.state.formData) {
           let formData = { ...this.state.formData, ...nextProps.getUserData.data };
           this.setState({ formData: formData  });
       }
    }

    upDateData(e,type){
        let data = this.state.formData;
        if(type=="inputbox"){
            data[e.target.name]=e.target.value;
        }
        this.setState({formData:data})     
    }

    render(){
        return (
         <div className="container"> 
            <form>
                 <div className="form">
                    <InputBox title="First name" name="first_name" value={this.state.formData.first_name} onUpdate={this.upDateData}/>
                    <InputBox title="Last name" name="last_name" value={this.state.formData.last_name} onUpdate={this.upDateData}/>
                    <InputBox title="Company" name="company" value={this.state.formData.company} onUpdate={this.upDateData}/>
                    <InputBox title="Department" name="department" value={this.state.formData.department} onUpdate={this.upDateData}/>
                    <InputBox title="Position" name="position" value={this.state.formData.position} onUpdate={this.upDateData}/>
                    <InputBox title="Email" name="email" value={this.state.formData.email} onUpdate={this.upDateData}/>
                    <div className="btn" onClick={this.handleSubmit}>Save</div>
                </div>
            </form>
        </div>
        );
    }
}

function mapStateToProps(state) {
    return { 
        getUserData:  state.addUpdateUser.all? state.addUpdateUser.all: state.getUser.all,
    };                  
}

export default connect(mapStateToProps, { addUpdateUser, getUser })( App );  
