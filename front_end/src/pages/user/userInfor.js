import Righthome from "../home/righthome";
import "./user.css";

const userInfo = () => {
  return (
    <div className="row w-100">
    
      <div className="col-9 instruct ps-5 pb-5">
        
        <div className="pt-5 ps-5 pe-5 pb-5">
        <h3 className="pt-3">THÔNG TIN SINH VIÊN</h3>
        <div class="card">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Họ và tên:
                    <p>Nguyễn Văn An</p>
                </li>
                <li class="list-group-item">MSSV:
                    <p>19123546</p>
                </li>
                <li class="list-group-item">Ngày sinh:
                    <p>12/12/2001</p>
                </li>
                <li class="list-group-item">Số điện thoại:
                    <p>090909099</p>
                </li>
                <li class="list-group-item">Địa chỉ:
                    <p>An Giang</p>
                </li>
                <li class="list-group-item">Email:
                    <p>Annguyen@gmail.com</p>
                </li>
            </ul>
        </div>
        
      </div>
      </div>

      <div className="col-3">
        <Righthome />
      </div>
    </div>
   
  );
};

export default userInfo;
