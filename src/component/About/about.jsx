import React, { Component } from 'react';
import './about.css';
import Visual from '../Visual/visual.jsx';
import ContactUs from '../ContactUs/contact.jsx';


class About extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    	window.scroll(0,0);
    }
    render() {
        return (
            <div>
            	<Visual/>
            	<div className="about">
            		<h1>VỀ CHÚNG TÔI</h1>
            		<p>CHÚNG TÔI LÀ mỘT CÔNG TY PHÁT TRIỂN, TƯ VẤN VÀ TRIỂN KHAI ỨNG DỤNG <br/>
                    PHẦN MỀM VÀ GIẢI PHÁP QUẢN TRỊ DOANH NGHIỆP TRÊN NỀN TẢNG CNTT.</p>
            		<p>CHÚNG TÔI ĐÃ HỖ TRỢ NHIỂU TỔ CHỨC KHÁC NHAU <bt/>
                    CHỌN LỌC VÀ ĐÓNG GÓI CÁC GIẢI PHÁP ĐẶC THÙ CHO TỪNG MÔ HÌNH DOANH NGHIỆP, <br/>
                    GIÚP DOANH NGHIỆP TỐI ĐA HÓA LỢI NHUẬN</p>
            	</div>
	            <p className="comming-about">COMMING SOON</p>
	            <ContactUs/>
            </div>
        );
    }
}

export default About;
