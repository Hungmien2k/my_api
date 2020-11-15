import React ,  { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Link,
    useRouteMatch
  } from "react-router-dom";

const menus = [
    {
        name : "Trang Chủ",
        to : '/',
        exact : true
    },
    {
        name : "Quản lý Sản Phẩm",
        to : '/product-list',
        exact : false
    }
]




const MenuLink = ({ label, to, activeOnlyWhenExact }) =>{
    let match = useRouteMatch({
      path: to,
      exact: activeOnlyWhenExact
    });
  
    return (
      <li className={match ? "active" : ""}>
        <Link to={to}>{label}</Link>
      </li>
    );
  }





class Menu extends Component{


    render(){


        return (
            <nav className="navbar navbar-expand-sm bg-light navbar-default">
                <a className = "navbar-brand">CALL API</a>
                <ul className="navbar-nav">
                    {this.showMenus(menus)}
                </ul>
            </nav>
        );
    }

    showMenus = (menus) => {
        var reusult = null;

        if(menus.length > 0)
        {
            reusult = menus.map((menu , index) => {
                return(
                    <MenuLink to = {menu.to} label = {menu.name} activeOnlyWhenExact = {menu.exact} key = {index} />
                )
            })
        }

        return reusult;
    }
}

export default Menu;
