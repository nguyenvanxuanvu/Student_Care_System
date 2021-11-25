import React, { Component } from 'react';
import Righthome from '../home/righthome';
import axios from 'axios';
import Moment from 'moment';
import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import ListCall from './ListCall';
import { MdNorthWest } from 'react-icons/md';

class addCall extends Component{
    constructor(props){
        super(props);
        this.state = {
            ID: '',
            topic:'',
            status:''
        };
        
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }
    
    validateForm = () => {
        var data = this.state;

        if (data.ID === '' || data.topic === '') {
            return false;
        }
        return true;
    };
    
    onHandleSubmit(event){
        if (this.validateForm()) {
            console.log('successful');
            var postData = {
                StudentID: this.state.ID,
                Topic: this.state.topic,
                Status: this.state.status,
                StaffID: 'NV10983'                    
            };
            axios.post('/addCall', postData)
                .then()
                .catch((err) => alert('failure'));

                window.location.href = 'http://localhost:3001/addCall'
            alert('Thêm cuộc gọi thành công')
        }
        else {
            alert('Cần điền đầy đủ thông tin!');
        }     
    }
    render(){
    return (
    <div className="row w-100">
      <div className="col-9">
        <div className="pt-3 pb-3 ps-3 pe-3">
            <div className="pt-3 ps-5">

            <h2>{localStorage.getItem("language")?"Lịch sử cuộc gọi":"Call History"}</h2>
            <br/>
            <form className="row row-cols-lg-auto g-3 align-items-center" onSubmit={ this.onHandleSubmit }>
                    <div className="col-12">
                        <div className="input-group">
                        <input type="text" className="form-control" id="inlineFormInputGroupUsername" 
                        placeholder={localStorage.getItem("language")?"MSSV":"StudentID"}
                        name="ID" 
                        onChange= {(event) => this.setState({ID : event.target.value})} 
                        />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="input-group">
                        <input type="text" className="form-control" id="inlineFormInputGroupUsername" 
                        placeholder={localStorage.getItem("language")?"Vấn đề":"Problem"}
                        name="topic" 
                        onChange={(event) => this.setState({topic : event.target.value})}
                        />
                        </div>
                    </div>
                    <div className="col-12">
                        <select className="form-select" id="inlineFormSelectPref"
                        name="status" onChange={(event) => this.setState({status : event.target.value})} >
                        <option value="1" selected>{localStorage.getItem("language")?"Đã giải quyết":"Resolved"}</option>
                        <option value="0">{localStorage.getItem("language")?"Chưa giải quyết":"Unresolved"}</option>
                        </select>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">
                        {localStorage.getItem("language")?"Thêm":"Add"}
                        </button>
                    </div>
            </form> 
            <br/>
            <ListCall/>    
                </div>
            </div>     
        </div>
        <div className="col-2">
        <Righthome />
      </div>
    </div>
    );
    }
}

export default addCall;