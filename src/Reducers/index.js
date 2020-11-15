import {combineReducers} from 'redux';
import products from './products';
import itemEditing from './itemEditting'

const appReducers = combineReducers({
    products,
    itemEditing
});
export default appReducers;
