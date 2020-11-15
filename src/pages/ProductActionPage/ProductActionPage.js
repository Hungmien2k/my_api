import React , {Component} from 'react';
import { Link } from 'react-router-dom';
import callApi from './../../utils/apiCaller'
import {actAddProductRequest , actItemEditingRequest , actUpdateProductRequest} from './../../Actions/index';
import {connect} from 'react-redux';

class ProductActionPage extends Component{

    constructor(props)
    {
        super(props);

        this.state = {
            id : "",
            txtName : "",
            txtPrice : "",
            txtCheckbox : "",
        }

    }

    onHandleChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === "checkbox" ? target.checked : target.value;

        this.setState({
            [name] : value
        })
    }

    onHandleSubmit = (e) => {
        e.preventDefault();

        var {history} = this.props;
        var {id , txtName ,txtPrice , txtCheckbox } = this.state;

        var product = {
            id : id,
            name : txtName,
            price : txtPrice,
            status : txtCheckbox
        }


        if(id){//Sửa

            this.props.onUpdateProduct(product);

        }else{//thêm
            this.props.onAddProducts(product);
        }

        history.goBack();
        
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        console.log("UNSAFE_componentWillReceiveProps");
        var {itemEdting} = nextProps;
        if(nextProps && nextProps.itemEdting)
        {
            var {itemEdting} = nextProps;
            this.setState({
                id : itemEdting.id,
                txtName : itemEdting.name,
                txtPrice : itemEdting.price,
                txtCheckbox : itemEdting.status
            })
        }
    }

    componentDidMount(){
        var {match} = this.props;

        if(match){
            var id = match.params.id;
            
            this.props.onEditProduct(id);
           
        }
        
    }

    


    render(){

        var {txtName ,txtPrice , txtCheckbox } = this.state;

        return(

            <form onSubmit = {this.onHandleSubmit}>

                <div className="form-group">
                    <label>Tên Sản Phẩm : </label>
                    <input type="text" name = "txtName" className="form-control" value = {txtName} onChange = {this.onHandleChange} />
                </div>

                <div className="form-group">
                    <label>Giá :</label>
                    <input type="number" name = "txtPrice" className="form-control" value = {txtPrice} onChange = {this.onHandleChange} />
                </div>

                <div className="form-group form-check">
                    <label className="form-check-label">
                        <input className="form-check-input" name = "txtCheckbox" type="checkbox" checked = {txtCheckbox} value = {txtCheckbox} onChange = {this.onHandleChange} /> Còn Hàng
                    </label>
                </div>

                <Link to = "/product-list" className = "btn btn-danger">Trở Lại</Link>

                <button type = "submit" className="btn btn-primary ml-3">Submit</button>

            </form>

        );
    }
}

const mapStateToProps = (state) => {
    return{
        itemEdting : state.itemEditing
    }
}


const mapDispatchToProps = (dispatch , props) => {
    return{
        onAddProducts : (product) => {
            dispatch(actAddProductRequest(product))
        },
        onEditProduct : (id) => {
            dispatch(actItemEditingRequest(id))
        },
        onUpdateProduct : (product) => {
            dispatch(actUpdateProductRequest(product))
        }
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(ProductActionPage);