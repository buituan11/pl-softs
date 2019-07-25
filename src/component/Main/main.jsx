import React, { Component } from 'react';
import './main.css';
import Comment from './Comment/comment.jsx';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: null
        }
    }
    componentDidMount() {
        window.scroll(0, 0);
        // this.setState({width: window.innerWidth});
    }
    render() {
        return (	
            <div className="main container-fluid">
            	<div className="visual container-fluid">
                    <div className="visual-title container-fluid">
                            <p>PL-Softs!</p>
                            <p>Phần mềm kế toán quản trị chuyên sâu.</p>
                    </div>
                    <div className="visual-detail">
                        <div className="visual-detail-left col-md-6">
                            <p>VỀ SẢN PHẨM</p>
                            <div className="visual-detail-figure">
                                <p>287%</p>
                                <p>Hiệu quả tài chính doanh nghiệp vượt bậc</p>
                            </div>
                            <button>Tìm hiểu thêm</button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Main;
