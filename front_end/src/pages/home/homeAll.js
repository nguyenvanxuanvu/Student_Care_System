import React from 'react';
import  Abovehome  from './abovehome';
import Righthome from './righthome';
const HomeAll = () => {
  return (
    <div class="row w-100">


       <div class="col-9">
           <Abovehome/>

     </div>

     <div class="col-3">
           <Righthome/> 
       

     </div>

     </div>
      
    
  );
};

export default HomeAll;