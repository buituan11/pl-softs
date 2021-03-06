import React, { Component } from 'react';
import './footer.css'
import { BrowserRouter as Route, Router, NavLink} from 'react-router-dom';
class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer container-fluid">
            <div className="row">
            	<div className="location col-lg-4">
            		<a href="#">
	            		<i className="fas fa-map-marker-alt"></i> LIÊN HỆ:<br/>
						453KA/35A Lê Văn Sỹ P.12 Q.3 TP.HCM<br/><br/>
					</a>
					<a href="#"><i className="fas fa-phone"></i> 0903.8.29137<br/><br/></a>
					<a href="#"><i className="fas fa-envelope"></i> pl.softs.2019@gmail.vn<br/><br/></a>
            	</div>
            	<div className="menu-footer col-lg-5">
            		<p><i className="fas fa-bars"></i> MENU</p>
            		<ul> 
                        {this.props.mainRoute.map((item, index) =>
                            <li key={index}>
                                <NavLink to={`${item.path}`}> {item.title} </NavLink>
                            </li>    
                        )}
            		</ul>
            		<p><i className="fas fa-globe-asia"></i> GLOBAL SITES</p>
            	</div>
            	<div className="iso col-lg-3">
            		<p><i className="fas fa-bookmark"></i> CHỨNG CHỈ BẢO MẬT</p>
            	</div>
            </div>
            </div>
        );
    }
}

export default Footer;
