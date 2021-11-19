import React from 'react';

const SignIn = () => {
  return (
    <div class="pt-5 ps-5">
    <div class="col-md-6">
    <label for="exampleDate" class="form-label">Ngày</label>
    <input type="date" class="form-control" id="exampleDate"/>
  </div>
  <div class="col-md-6">
    <label for="exampleTime" class="form-label">Giờ</label>
    <input type="time" class="form-control" id="exampleTime"/>
  </div>
  </div>
    
  );
};

export default SignIn;