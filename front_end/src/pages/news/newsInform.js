import React, { Component } from 'react';
import '../Inform.css';

function NewsInform(){
        return (
            <div className="page-container">
                <div className="page-content">
                    <p>Giải trí</p>
                    <h1>Học đường hài hước</h1>
                </div>
                <div>
                    <p>2021-01-01</p>
                    <p>Các bạn có thể giải trí bằng các mẩu chuyện cười ở link sau: https://azuiaz.com/the-loai/hoc-duong/ </p>
                    Tác giả: <p>Trần Văn An</p>
                </div>
            </div>
        );
    
}

export default NewsInform;