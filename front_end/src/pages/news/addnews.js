import React, { Component } from 'react';
import Righthome from '../home/righthome';
import axios from 'axios';
import Moment from 'moment';
import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';


class newsForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            topic: '',
            title: '',
            content:'',
            author: '',
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

        if (data.topic === '' || data.title === '' || data.content === '' ||
            data.author === '') {
            return false;
        }
        return true;
    }
  
    onHandleSubmit(event){
        if (this.validateForm()) {
            console.log('successful');
            let id = localStorage.getItem("userid")
            var postData = {
                topic: this.state.topic,
                title: this.state.title,
                content: this.state.content,
                author: this.state.author,
                caringStaffID: id,
                addDay : this.handleDate(new Date().toLocaleDateString())
                
            };
            axios.post('/addNews', postData)
                .then()
                .catch((err) => alert('failure'));

                window.location.href = 'http://localhost:3001/newsform'
            alert('Thêm tin tức thành công')
        }
         
        else {
            alert('Cần điền đầy đủ thông tin!');
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
                            <h3 className="panel-title">{localStorage.getItem("language")?"Thêm tin tức":"Add news"}</h3>
                        </div>
                        <div className="panel-body">

                        <form onSubmit={ this.onHandleSubmit }>
                            <div className="form-group">
                                <label>{localStorage.getItem("language")?"Chủ đề:":"Subject:"} </label>
                                <input 
                                type="text" 
                                className="form-control" 
                                name="topic" 
                                onChange= {(event) => this.setState({topic : event.target.value})} 
                                />
                            </div><br/>
                            
                            <div className="form-group">
                                <label>{localStorage.getItem("language")?"Tiêu đề:":"Title:"} </label>
                                <input 
                                type="text" 
                                className="form-control" 
                                name="title" 
                                onChange={(event) => this.setState({title : event.target.value})} 
                                />
                            </div><br/>
                            
                            <div className="form-group">
                                <label>{localStorage.getItem("language")?"Nội dung:":"Content:"} </label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    name="content"
                                    onChange={(event) => this.setState({content : event.target.value})} 
                                ></textarea>
                            </div><br/>
                            
                            <div className="form-group">
                                <label>{localStorage.getItem("language")?"Tác giả:":"Author"} </label>
                                <input 
                                type="text" 
                                className="form-control" 
                                name="author" 
                                onChange={(event) => this.setState({author : event.target.value})} 
                                />
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

export default newsForm;