import Menu from './Components/Menu/menu';
import './App.css';
import routers from './routes';
import { Component } from 'react';
import { Switch , Route , BrowserRouter as Router} from 'react-router-dom';


class App extends Component {
    render()
    {
        return (
            <Router>
                <div className="App">
        
                    <Menu />
        
                    <div className = "container">
                        <div className = "row">
        
                            {/*
        
                                <div className = "col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <button type = "button" className = "btn btn-info mt-3">
                                        Thêm Sản Phẩm
                                    </button>
        
                                    <ProductList />
                                </div>
                        
                            */}
        
                            {this.showProductList(routers)}
                            
                        </div>
                    </div>
                </div>
            </Router>
        );
    }

    showProductList = (routers) => {
        var result = null;

        result = routers.map((router , index) => {
            return(
                <Route key = {index} path = {router.path} component = {router.main} exact = {router.exact}  />
            )
        })

        return <Switch>{result}</Switch>;
    }
    
}

export default App;
