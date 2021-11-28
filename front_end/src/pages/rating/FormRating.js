import React, { Component, useState } from 'react';
import "./Form.css";
import Righthome from '../home/righthome';
import axios from 'axios';

const RatingForm = () =>{
    const formatDate1 = (date) => {
        var ans = [];
        ans = date.split('/');
        return (ans[2]+'-'+ans[0]+'-'+ans[1]).toString();
    }
    var [rate,setRate] = useState('')
    var [mssv,setmssv] = useState('')
    const onHandleSubmit = () => {
       let id = localStorage.getItem("userid")
        var postData = {
            Content : rate,
            ID: id,
            Date: formatDate1(new Date().toLocaleDateString())
           
    
            
        };
        axios.post('/createrating', postData)
                .then()
                .catch((err) => alert('failure'));
    
                window.location.href = 'http://localhost:3001/ratingform'
            alert('Gửi đánh giá thành công')
        
    }
    
    return (
        <div class="row w-100">
        <div class="col-9">
        <div className="container mt-30">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title">{localStorage.getItem("language")?"Phiếu đánh giá":"Rating sheet"}</h3>
                        </div>
                        <div className="panel-body">

                        <form onSubmit={ onHandleSubmit }>
                            
                            
                            <div className="form-group">
                                <label>{localStorage.getItem("language")?"MSSV:":"ID:"} </label>
                                <input 
                                type="text" 
                                className="form-control" 
                                name="userid" 
                                onChange = {(event) => setmssv(event.target.value)}
                                />
                            </div> <br/>
                            
                            <div className="form-group">
                                <label>{localStorage.getItem("language")?"Mô tả đánh giá:":"Review description:" }</label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    name="rating"
                                    onChange = {(event) => setRate(event.target.value)}
                                ></textarea>
                            </div> <br/>

                            <button type="submit"  className="btn btn-primary">{localStorage.getItem("language")?"Gửi":"Send"}</button>

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

export default RatingForm;