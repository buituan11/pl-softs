import React, { Component } from 'react';
import './App.css';
import Header from '../Header/header.jsx';
import Main from '../Main/main.jsx';
import Footer from '../Footer/footer.jsx';
import NoMatch from '../NoMatch/nomatch.jsx';
import Product from '../Product/product.jsx';
import Func from '../Func/func.jsx';
import About from '../About/about.jsx';
import Service from '../Service/service.jsx';
import { BrowserRouter as Router, Route, NavLink,Switch } from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state ={
          mainRoute:[
            {
              title: "SẢN PHẨM",
              path: "/san-pham",
                routes:[
                  {
                    title: "NỀN TẢNG WEB",
                    path: "/san-pham/nen-tang-web",
                    subroute: [
                      {
                        id: 1,
                        title: "Tính năng 1",
                      },
                      {
                        id: 2,
                        title: "Tính năng 2",
                      }
                    ]   //Nền tảng web
                  },
                  {

                    title: "QUẢN LÝ KHO",
                    path: "/san-pham/quan-ly-kho",
                    subroute: [
                      {
                        id: 1,
                        title: "Quản lý 1",
                      },
                      {
                        id: 2,
                        title: "Quản lý 2",
                      }
                    ]   //Quản lý kho
                  }
                ]           //Tinh nang
            },
            {
              title: "TÍNH NĂNG",
              path: "/tinh-nang",
                routes:[
                  {
                    title: "GIẢI PHÁP HỢP LÝ",
                    path: "/tinh-nang/giai-phap",
                    subroute: [
                      {
                        id: 1,
                        title: "Giải pháp 1",
                      },
                      {
                        id: 2,
                        title: "Giải pháp 2",
                      }
                    ]   
                  },
                  {
                    title: "VÌ SAO CHỌN PL-Softs",
                    path: "/tinh-nang/vi-sao-chon-PL-Softs",
                    subroute: [
                      {
                        id: 1,
                        title: "Vì sao 1",
                      },
                      {
                        id: 2,
                        title: "Vì sao 2",
                      }
                    ]   
                  }
                ]           //Ve ECOUNT
            },
            {
              title: "DỊCH VỤ",
              path: "/dich-vu",
                routes:[
                  {
                    title: "HỖ TRỢ ĐÀO TẠO",
                    path: "/dich-vu/ho-tro",
                    subroute: [
                      {
                        id: 1,
                        title: "Hỗ trợ 1",
                      },
                      {
                        id: 2,
                        title: "Hỗ trợ 2",
                      }
                    ]  
                  },
                  {
                    title: "CẬP NHẬT HỆ THỐNG",
                    path: "/dich-vu/cap-nhat",
                    subroute: [
                      {
                        id: 1,
                        title: "Cập nhật 1",
                      },
                      {
                        id: 2,
                        title: "Cập nhật 2",
                      }
                    ]  
                  }
                ]           //Dich vu
            },      
            {
              title: "GIỚI THIỆU",
              path: "/about",
                routes:[
                  {
                    title: "GIỚI THIỆU",
                    path: "/gioi-thieu/gioi-thieu-chung",
                    subroute: [
                      {
                        id: 1,
                        title: "Giới thiệu 1",
                      },
                      {
                        id: 2,
                        title: "Giới thiệu 2",
                      }
                    ]  
                  },
                  {
                    title: "VỀ ĐỘI NGŨ CHÚNG TÔI",
                    path: "/gioi-thieu/about-us",
                    subroute: [
                      {
                        id: 1,
                        title: "VỀ CHÚNG TÔI 1",
                      },
                      {
                        id: 2,
                        title: "VỀ CHÚNG TÔI 2",
                      }
                    ]  
                  }
                ]             //Gioi thieu
            }
          ]
        }
    }
    RenderMain = () => {
      return (
          <Main 
            mainRoute={this.state.mainRoute}/>
      );
    }
    render() {
        return (
        <Router>
          <div className="App container-fluid">
            <Header 
              mainRoute={this.state.mainRoute}/>
            <Switch>
              <Route exact path={process.env.PUBLIC_URL+'/'} component={ () => this.RenderMain() }/>
              <Route exact path={'/'} component={ () => this.RenderMain() }/>
              {/*{this.state.mainRoute.map(item =>
                  item.routes.map((e, index)=>
                    <Route key={index} path={ `${e.path}/:id` } component={ ({match})=>this.RenderContent( item, {match})}/>                    
                  )
              )}  */}
              <Route exact path={`${this.state.mainRoute[0].path}`}component={ Product }/>  
              <Route exact path={`${this.state.mainRoute[1].path}`}component={ Func }/>  
              <Route exact path={`${this.state.mainRoute[2].path}`}component={ Service }/>  
              <Route exact path={`${this.state.mainRoute[3].path}`}component={ About }/>
              <Route component={ NoMatch }/>
            </Switch>
            <Footer mainRoute={this.state.mainRoute}/>
          </div> 
        </Router>
        );
    }
}

export default App;

