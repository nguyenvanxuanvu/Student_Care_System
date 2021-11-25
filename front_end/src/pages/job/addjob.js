import React, { Component } from 'react';
import Righthome from '../home/righthome';
import axios from 'axios';
import Moment from 'moment';
import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';


class jobForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            company: '',
            jobname: '',
            phonenum:'',
            address: '',
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

        if (data.company === '' || data.jobname === '' || data.phonenum === '' ||
            data.address === '' || data.sdate === '' || data.edate === '') {
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
                let id = localStorage.getItem("userid");
            var postData = {
                company: this.state.company,
                jobname: this.state.jobname,
                phonenum: this.state.phonenum,
                address: this.state.address,
                sdate: this.state.sdate,
                edate: this.state.edate,
                staffID: id,
                addDay : this.handleDate(new Date().toLocaleDateString())
                
            };
            axios.post('/addJob', postData)
                .then()
                .catch((err) => alert('failure'));

                window.location.href = 'http://localhost:3001/jobform'
            alert('Thêm việc làm thành công')
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
                            
                         
                             <h3 className="panel-title">{localStorage.getItem("language")? "Thêm việc làm":"Add job"}</h3>
                        </div>
                        <div className="panel-body">

                        <form onSubmit={ this.onHandleSubmit }>
                            <div className="form-group">
                                <label>{localStorage.getItem("language")?"Tên công việc:":"Job name:"} </label>
                                <input 
                                type="text" 
                                className="form-control" 
                                name="jobname" 
                                onChange= {(event) => this.setState({jobname : event.target.value})} 
                                />
                            </div><br/>
                            
                            <div className="form-group">
                                <label>{localStorage.getItem("language")?"Công ty:":"Company"} </label>
                                <input 
                                type="text" 
                                className="form-control" 
                                name="company" 
                                onChange={(event) => this.setState({company : event.target.value})} 
                                />
                            </div><br/>
                            
                            <div className="form-group">
                                <label>{localStorage.getItem("language")?"Số điện thoại:":"Phone number:"} </label>
                                <input 
                                type="text" 
                                className="form-control" 
                                name="phonenum" 
                                onChange={(event) => this.setState({phonenum : event.target.value})} 
                                />
                            </div><br/>
                            
                            
                            <div className="form-group">
                                <label>{localStorage.getItem("language")?"Địa chỉ:":"Address:"} </label>
                                <input 
                                type="text" 
                                className="form-control" 
                                name="address" 
                                onChange={(event) => this.setState({address : event.target.value})} 
                                />
                            </div><br/>
                            <div className="form-group">
                                <label for="exampleDate" class="form-label">{localStorage.getItem("language")?"Ngày bắt đầu tuyển dụng":"Recruitment start date"}</label>
                                <input type="date" class="form-control" id="sdate"
                                name="appointdate" onChange={(event) => this.setState({sdate : event.target.value})} />
                            </div><br/>
                            <div className="form-group">
                                <label for="exampleDate" class="form-label">{localStorage.getItem("language")?"Ngày kết thúc tuyển dụng":"Recruitment end date"}</label>
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

export default jobForm;