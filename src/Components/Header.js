import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import {$} from 'react-jquery-plugin'
import {Constants} from "../Library/Constants";


class Header extends Component {


    componentDidMount() {
        let getNav = $("nav.navbar.bootsnav");
        if (getNav.hasClass("no-background")) {
            $(window).on("scroll", function () {
                let scrollTop = $(window).scrollTop();
                if (scrollTop > 34) {
                    $(".navbar-fixed").removeClass("no-background");
                } else {
                    $(".navbar-fixed").addClass("no-background");
                }
            });
        }

        /* ========== Smooth Scroll ========== */
        $('a.smooth-menu').on('click', function (event) {
            let menuToggle = $('.navbar-toggle')
            let $anchor = $(this);
            let headerH = '75';
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1500, 'easeInOutExpo');
            menuToggle.click()
            event.preventDefault();
        });
    }

    render() {
        return (
            <>
                {/*<div className="se-pre-con"/>*/}
                <header id="home">
                    <nav className="navbar navbar-default navbar-fixed white no-background bootsnav">
                        <div className="container">
                            {/*<div className="attr-nav button inc-border">
                                <ul>
                                    <li>
                                        <a href="#">Sign In</a>
                                    </li>
                                </ul>
                            </div>*/}
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                    <i className="fa fa-bars"/>
                                </button>
                                <Link className="navbar-brand" to="#home">
                                    <img src={Constants.COMPANY.LOGO} className="logo logo-display" alt="Logo"/>
                                    <img src={Constants.COMPANY.LOGO} className="logo logo-scrolled" alt="Logo"/>
                                </Link>
                            </div>
                            <div className="collapse navbar-collapse" id="navbar-menu">
                                <ul className="nav navbar-nav navbar-right" data-in="#" data-out="#">
                                    <li>
                                        <a href="#home" className="smooth-menu">Home</a>
                                    </li>
                                    <li>
                                        <a className="smooth-menu" href="#about">About</a>
                                    </li>
                                    <li>
                                        <a className="smooth-menu" href="#features">Features</a>
                                    </li>
                                    <li>
                                        <a className="smooth-menu" href="#overview">Overview</a>
                                    </li>
                                   {/* <li>
                                        <a className="smooth-menu" href="#pricing">Pricing</a>
                                    </li>
                                    <li>
                                        <a className="smooth-menu" href="#blog">Blog</a>
                                    </li>*/}
                                    <li>
                                        <a className="smooth-menu" href="#contact">contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            </>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default withRouter(Header);
