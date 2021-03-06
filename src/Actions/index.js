import * as Types from './../Constants/ActionTypes';
import callApi from './../utils/apiCaller';

export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('products' , 'GET' , null).then(res => {
            dispatch(actFetchProducts(res.data))
        })
    }
}

export const actFetchProducts = (products) => {
    return{
        type : Types.FETCH_PRODUCTS,
        products
    }
}

export const actDeleteProductsRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}` , 'DELETE' , null).then(res => {
            dispatch(actDeleteProducts(id));
        })
    }
} 

export const actDeleteProducts = (id) => {
    return{
        type : Types.DELETE_PRODUCT,
        id
    }
}

export const actAddProductRequest = (product) => {
    return(dispatch) => {
        return callApi('products' , 'POST' , product).then(res => {
            dispatch(actAddProducts(product));
        })
    }
}

export const actAddProducts = (product) => {
    return{
        type : Types.ADD_PRODUCT,
        product
    }
}


export const actItemEditingRequest = (id) => {//lưu product có id = id lên store
    return dispatch => {
        return callApi(`products/${id}` , 'GET' , null).then(res => {
            dispatch(actItemEditing(res.data))
        })
    }
}

export const actItemEditing = (product) => {//
    return{
        type : Types.EDIT_PRODUCT,
        product
    }
}

//cập nhật lại dữ liệu khi click vào nút lưu lại

export const actUpdateProductRequest = (product) => {
    return dispatch => {
        return callApi(`products/${product.id}` , 'PUT' , product).then(res => {
            dispatch(actUpdateProduct(res.data))
        })
    }
}

export const actUpdateProduct = (product) => {
    return{
        type : Types.UPDATE_PRODUCT,
        product
    }
}






























