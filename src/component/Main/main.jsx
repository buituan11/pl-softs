import React, { Component } from 'react';
import './main.css';
import Comment from './Comment/comment.jsx';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

class Main extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        window.scroll(0, 0);
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
                            <button className="btn-black">
                                <NavLink to={`${this.props.mainRoute[0].routes[0].path}/${this.props.mainRoute[0].routes[0].subroute[0].id}`}>
                                    Tìm hiểu thêm
                                </NavLink>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="feature">
                    <div className="row">
                        <div className="feature-content col-md-6">
                            <div className="diamond-top"><div className="diamond"></div></div>
                            <div className="diamond-bottom"><div className="diamond"></div></div>
                            <h1>NỘI DUNG</h1> <h1>GIÁ</h1>
                            <p>Tư vấn giải pháp doanh nghiếp</p> <p>FREE</p>
                            <p>Tài chính, kế toán ưu việt</p> <p>$3/ngày</p>
                            <p>Quản trị nguồn lực(ERP)</p> <p>Theo dự án</p>
                        </div>
                        <div className="feature-detail col-md-6">
                            <h1>TÍNH NĂNG</h1>
                            <p>14 năm kinh nghiệm tư vấn giải pháp doanh nghiệp.</p>
                            <p>Tính năng tài chính, kế toán ưu việt.</p>
                            <p>Nâng cấp doanh nghiệp của bạn lên mức tự động vận hành.</p>
                            <button className="btn-black">
                                <NavLink to={`${this.props.mainRoute[1].routes[0].path}/${this.props.mainRoute[1].routes[0].subroute[0].id}`}>
                                    Tìm hiểu thêm
                                </NavLink>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="contact-us">
                    <p>Để lại lời nhắn</p>
                    <form>
                      <div className="form-group">
                        <label htmlFor="exampleName">Tên</label>
                        <input type="text" className="form-control" id="exampleName" placeholder="Họ và tên" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailContact" placeholder="Enter email" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleText">Nội dung</label>
                        <textarea className="form-control"></textarea>
                      </div>
                      <button type="submit" className="btn btn-primary">Xác nhận</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Main;
