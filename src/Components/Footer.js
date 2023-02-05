import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import {Constants} from "../Library/Constants";

class Footer extends Component {
    render() {
        return (
            <>
                <footer className="default-padding bg-light">
                    <div className="container">
                        <div className="f-items">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 item">
                                    <div className="f-item">
                                        <img src={Constants.COMPANY.LOGO} alt={Constants.COMPANY.NAME}/>
                                        <p>
                                            Excellence decisively nay man yet impression for contrasted remarkably. There spoke happy for you are out.
                                            Fertile how old address did showing because sitting replied six. Had arose guest visit going off child she new.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-5 item">
                                    {/*<div className="f-item link">
                                        <h4>Quick LInk</h4>
                                        <ul>
                                            <li>
                                                <a href="#"><i className="fas fa-angle-right"/> Home</a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="fas fa-angle-right"/> About us</a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="fas fa-angle-right"/> Compnay History</a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="fas fa-angle-right"/> Features</a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="fas fa-angle-right"/> Blog Page</a>
                                            </li>
                                        </ul>
                                    </div>*/}
                                </div>
                                <div className="col-lg-4 col-md-7 item">
                                    <div className="f-item twitter-widget">
                                        <h4>Contact Info</h4>
                                        <p>
                                            {Constants.COMPANY.ADDRESS}
                                        </p>
                                        <div className="address">
                                            <ul>
                                                <li>
                                                    <div className="icon">
                                                        <i className="fas fa-envelope"/>
                                                    </div>
                                                    <div className="info">
                                                        <h5>Email:</h5>
                                                        <span>{Constants.COMPANY.EMAIL}</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="fas fa-phone"/>
                                                    </div>
                                                    <div className="info">
                                                        <h5>Phone:</h5>
                                                        <span>{Constants.COMPANY.CONTACT}</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <p>&copy; Copyright {new Date().getFullYear()}. Developed by <a href="https://khaleejinfotech.com" target="_blank">KHALEEJ Infotech</a>
                                        </p>
                                    </div>
                                    {/*<div className="col-lg-6 text-right link">
                                        <ul>
                                            <li>
                                                <a href="#">Terms of user</a>
                                            </li>
                                            <li>
                                                <a href="#">License</a>
                                            </li>
                                            <li>
                                                <a href="#">Support</a>
                                            </li>
                                        </ul>
                                    </div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default withRouter(Footer);
