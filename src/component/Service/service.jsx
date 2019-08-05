import React, { Component } from 'react';
import Visual from '../Visual/visual.jsx';
import ContactUs from '../ContactUs/contact.jsx';
import './service.css';
class Service extends Component {
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
            <div className="service">
            	<div className="service-title">
            		<h1>DỊCH VỤ</h1>
            	</div>
            	<ul>
            		<li>
            			<p>Tư vấn giải pháp.</p>
            		</li>
            		<li>
            			<p>Thiết kế và cung cấp phần mềm.</p>
            		</li>
            		<li>
            			<p>Nâng cấp và cài đặt mới.</p>
            		</li>
            		<li>
            			<p>Hỗ trợ và đào tạo.</p>
            		</li>
            		<li>
            			<p>Sao lưu và bảo mật dữ liệu.</p>
            		</li>
            	</ul>
            </div>
            <p className="comming-service">COMMING SOON</p>
            <ContactUs/>
        </div>
        );
    }
}

export default Service;
