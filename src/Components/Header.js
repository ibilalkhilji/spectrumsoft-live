import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {$} from 'react-jquery-plugin'


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
            let $anchor = $(this);
            let headerH = '75';
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1500, 'easeInOutExpo');
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
                            <div className="attr-nav button inc-border">
                                <ul>
                                    <li>
                                        <a href="#">Sign In</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                    <i className="fa fa-bars"/>
                                </button>
                                <a className="navbar-brand" href="index.html">
                                    <img src="assets/img/logo-light.png" className="logo logo-display" alt="Logo"/>
                                    <img src="assets/img/logo.png" className="logo logo-scrolled" alt="Logo"/>
                                </a>
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
                                    <li>
                                        <a className="smooth-menu" href="#pricing">Pricing</a>
                                    </li>
                                    <li>
                                        <a className="smooth-menu" href="#blog">Blog</a>
                                    </li>
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
