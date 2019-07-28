import React, { Component } from 'react';
import './contact.css';

class ContactUs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
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
        );
    }
}

export default ContactUs;
