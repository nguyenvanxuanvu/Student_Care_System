import React, { Component } from 'react';
import Righthome from '../home/righthome';
import axios from 'axios';
import Moment from 'moment';
import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';


class scholarForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            scope: '',
            name: '',
            value:'',
            sdate:'',
            edate:''
        };
        
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }
    
    handleDate(e){
        e = e.toString();
        var a = e.split('/');
        return a[2]+'-'+a[0]+'-'+a[1];

    }

    validateForm = () => {
        var data = this.state;

        if (data.scope === '' || data.name === '' || data.value === '' ||
            data.sdate === '' || data.edate === '' ) {
            return false;
        }
        return true;
    }
    isValidDate = () => {
        var data = this.state;
        var sd = new Date(data.sdate);
        var ed = new Date(data.edate);
        if(sd > ed ){ return false; }
        return true;
    }
    onHandleSubmit(event){
        if(!this.isValidDate()){
            alert('Ngày bắt đầu phải nhỏ hơn ngày kết thúc')
        }
        else{
        if (this.validateForm()) {
            console.log('successful');
            let id = localStorage.getItem("userid")
            var postData = {
                scope: this.state.scope,
                name: this.state.name,
                value: this.state.value,
                sdate: this.state.sdate,
                edate: this.state.edate,
                staffID: id,
                addDay : this.handleDate(new Date().toLocaleDateString())
                
            };
            axios.post('/addScholarship', postData)
                .then()
                .catch((err) => alert('failure'));

                window.location.href = 'http://localhost:3001/scholarform'
            alert('Thêm học bổng thành công')
        }
         
        else {
            alert('Cần điền đầy đủ thông tin!');
        }
    }
        
    }
    render(){
    return (
        <div class="row w-100">
      <div class="col-9">
      <div className="mainscroll pt-3 pb-3 ps-3 pe-3">
            <div className="row ps-5">
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            
                            {/* <h3 className="panel-title">{this.state.appointdate}</h3> */}
                          {localStorage.getItem("type3") &&  (<h3 className="panel-title">{localStorage.getItem("language")?"Thêm học bổng":"Add scholarship"}</h3>)}
                        </div>
                        <div className="panel-body">

                        <form onSubmit={ this.onHandleSubmit }>
                            <div className="form-group">
                                <label>{localStorage.getItem("language")?"Tên học bổng:":"Scholarship name:"} </label>
                                <input 
                                type="text" 
                                className="form-control" 
                                name="name" 
                                onChange= {(event) => this.setState({name : event.target.value})} 
                                />
                            </div><br/>
                            
                            <div className="form-group">
                                <label>{localStorage.getItem("language")?"Phạm vi nhận học bổng":"Scope for scholarship"} </label>
                                <input 
                                type="text" 
                                className="form-control" 
                                name="scope" 
                                onChange={(event) => this.setState({scope : event.target.value})} 
                                />
                            </div><br/>
                            
                            <div className="form-group">
                                <label>{localStorage.getItem("language")?"Giá trị:":"Value:"} </label>
                                <input 
                                type="text" 
                                className="form-control" 
                                name="value" 
                                onChange={(event) => this.setState({value : event.target.value})} 
                                />
                            </div><br/>
                            
                            <div className="form-group">
                                <label for="exampleDate" class="form-label">{localStorage.getItem("language")?"Ngày bắt đầu nhận đơn":"Application start date"}</label>
                                <input type="date" class="form-control" id="sdate"
                                name="appointdate" onChange={(event) => this.setState({sdate : event.target.value})} />
                            </div><br/>
                            <div className="form-group">
                                <label for="exampleDate" class="form-label">{localStorage.getItem("language")?"Ngày kết thúc nhận đơn":"Application end date"}</label>
                                <input type="date" class="form-control" id="edate"
                                name="appointdate" onChange={(event) => this.setState({edate : event.target.value})} />
                            </div><br/>

                            <button type="submit" className="btn btn-primary">{localStorage.getItem("language")?"Thêm":"Add"}</button>

                        </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div class="col-2">
        <Righthome />
      </div>
        </div>
    );
    }
}

export default scholarForm;