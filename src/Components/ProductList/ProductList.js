import React , {Component} from 'react';
class ProductList extends Component{
    render(){
        return(

            <div className = "card">
                <div className="card-header">
                    <h3>Danh Sách Sản Phẩm</h3>
                </div>

                <div className="card-body">
                    <table className="table table-bordered text-center">
                        <thead>

                            <tr>
                                <th>STT</th>
                                <th>Mã</th>
                                <th>Tên</th>
                                <th>Giá</th>
                                <th>Trạng Thái</th>
                                <th>Hành Động</th>
                            </tr>

                        </thead>
                            <tbody>

                                {this.props.children}

                            </tbody>
                    </table>
                </div>
            </div>

        );
    }
}
export default ProductList;