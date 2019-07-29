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
                <h1>SẢN PHẨM</h1>
                <p>14 năm kinh nghiệm tư vấn giải pháp doanh nghiệp</p>
                <p>Tính năng tài chính kế toán ưu việt</p>
                <p>Nâng cao tầm doanh nghiệp của bạn lên mức tự động vận hành</p>
                <div className="product-content">
                    <h1>NỘI DUNG</h1> <h1>GIÁ</h1>
                    <p>Tư vấn giải pháp doanh nghiếp</p> <p>FREE</p>
                    <p>Tài chính, kế toán ưu việt</p> <p>$3/ngày</p>
                    <p>Quản trị nguồn lực(ERP)</p> <p>Theo dự án</p>
                </div>
            </div>
            <p className="comming-product">COMMING SOON</p>
            <ContactUs/>
        </div>
        );
    }
}

export default Product;
