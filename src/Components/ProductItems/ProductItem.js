import React , {Component} from 'react';
import { Link } from 'react-router-dom';
class ProductItem extends Component{

    onDelete = (id) => {
        if(confirm('Bạn chắc chắn muốn xoa ? ')){//eslint-disable-line
            this.props.onhandleDelete(id);
        }
    }

    render(){

        var {product , index} = this.props;



        return(
            <tr>

                <td>{ index + 1 }</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>

                <td>
                    <span className = {`badge badge-${product.status ? "secondary" : "warning"}`}>
                        {product.status ? "còn Hàng" : "hết Hàng"}
                    </span>
                </td>
                <td>

                    <Link to = {`/product/${product.id}/edit`} className = "btn btn-primary mr-2">
                        Sửa
                    </Link>

                    <button type = "button" className = "btn btn-danger ml-2" onClick = {() => this.onDelete(product.id)}>
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
}
export default ProductItem;