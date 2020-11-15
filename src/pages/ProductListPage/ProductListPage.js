import React , {Component} from 'react';
import ProductList from './../../Components/ProductList/ProductList';
import ProductItem from './../../Components/ProductItems/ProductItem';
import axios from 'axios';
import {connect} from 'react-redux'
import appCaller from './../../utils/apiCaller'
import { Link } from 'react-router-dom';
import {actFetchProductsRequest , actDeleteProductsRequest} from './../../Actions/index';

class ProductListPage extends Component{

    constructor(props)
    {
        super(props);
    }

    componentDidMount(){

        this.props.fetchAllProducts();
    }

    onhandleDelete = (id) => {
        this.props.deleteProducts(id);
    }


    render(){

        //var {products} = this.props;
        var {products} = this.props;
        console.log(products);
        

        return(

            <div className = "col-xs-12 col-sm-12 col-md-12 col-lg-12">

                <Link to = "/product/add" className = "btn btn-info mt-3 mb-3">
                    Thêm Sản Phẩm
                </Link>

                <ProductList>
                    {this.showProducts(products)}
                </ProductList>

            </div>

        );
    }

    showProducts = (products) => {
        var result = null;

        result = products.map((product , index) => {
            return(
                <ProductItem 
                    key = {index} 
                    index = {index} 
                    product = {product}  
                    onhandleDelete = {this.onhandleDelete}
            />
            );
        })
        return result;
    }
}

const mapStateToProps = state => {
    return{
        products : state.products
    }
}

const mapDispatchToProps = (dispatch , props) => {
    return{
        fetchAllProducts : () => {
            dispatch(actFetchProductsRequest())
        },
        deleteProducts : (id) => {
            dispatch(actDeleteProductsRequest(id))
        }
    }
}


export default connect( mapStateToProps , mapDispatchToProps)(ProductListPage);