import React, { Component } from 'react';
import './product.css';
import Visual from '../Visual/visual.jsx';
import ContactUs from '../ContactUs/contact.jsx';
class Product extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        window.scroll(0, 0);
    }
    render() {
        return (
        <div>
            <Visual/>
        	<div className="product">
        		<h1>TÍNH NĂNG</h1>
        		<p>Phần mềm kế toán trọn gói PL Accounting FA1.1 có các tính năng sau đây</p>
        		<ol>
        			<li>
        				<p>Quản lí hệ thống</p>
        			</li>
        			<li>
        				<p>Kế toán tổng hợp</p>
        			</li>
        			<li>
        				<p>Kế toán vốn bằng tiền</p>
        			</li>
        			<li>
        				<p>Kế toán bán hàng và công nợ phải thư</p>
        			</li>
        			<li>
        				<p>Kế toán mua hàng và công nợ phải trả</p>
        			</li>
        			<li>
        				<p>Kế toán hàng tồn kho</p>
        			</li>
        			<li>
        				<p>Kế toán tập hợp chi phí</p>
        			</li>
        			<li>
        				<p>Kế toán tài sản cố định</p>
        			</li>
        			<li>
        				<p>Báo cáo thuế</p>
        			</li>
        			<li>
        				<p>Báo cáo tài chính</p>
        			</li>
        		</ol>
        	</div>
            <p className="comming-product">COMMING SOON</p>
            <ContactUs/>
        </div>
        );
    }
}

export default Product;
