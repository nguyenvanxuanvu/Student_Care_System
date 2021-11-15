import React, { Component } from 'react';
import '../Inform.css';

function EventInform(){
        return (
            <div className="page-container">
                <div className="page-content">
                    <p>Hoạt động ngoại khóa</p>
                    <h1>Dã ngoại cuối kỳ 211</h1>
                </div>
                <div>
                  <h3>Địa điểm</h3>
                  <p>Suối Tiên</p>
                </div>
                <div>
                  <h3>Số lượng tham gia dự kiến</h3>
                    <p>50</p>
                </div>
                <div>
                  <h3>Thời gian</h3>
                  <p><strong>2021-05-05</strong> to <strong>2021-05-07</strong></p>
                </div>
            </div>
        );
    
}

export default EventInform;