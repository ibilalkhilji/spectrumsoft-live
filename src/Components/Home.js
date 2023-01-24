import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {$} from 'react-jquery-plugin'
import SEO from "../Library/SEO";
import {Constants} from "../Library/Constants";

const initState = {
    features: [
        {
            title: "Manage Subscribers", content: "Manage Your Cable TV & Broadband Subscribers billing"
        },
        {
            title: "Complete Inventory", content: "Complete Inventory"
        },
        {
            title: "Live Tracking", content: "Live Tracking of your Employees on Map"
        },
        {
            title: "Surveys", content: "Online Survey & Customers Enquires"
        },
        {
            title: "Payment links", content: "Share Payment Link to collect customers outstanding"
        },
        {
            title: "Online Payments",
            content: "Subscribers can make online payment, Generate complaints, View Payment History, Upload Documents, Renew & Change their Packages"
        },
        {
            title: "Share Receipts & Invoices", content: "Share receipts & Invoices on whatsApp"
        },
        {
            title: "Ease of access", content: "Manage Grid view as per your need"
        },
        {
            title: "Income & Expenses", content: "Income & Expenses"
        },
        {
            title: "Manage Customers & Inventory",
            content: "Manage your customer & Inventory (Node, OLT, JC Boxes, Splitters, Bottles etc.) location & Draw Your Network"
        },
        {
            title: "Attendance & Salary", content: "Employee Attendance & Salary Management"
        },
    ]

}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = initState;
    }

    componentDidMount() {
        $('.clients-items').owlCarousel({
            loop: false,
            margin: 20,
            nav: true,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
            dots: false,
            autoplay: true,
            responsive: {
                0: {items: 1},
                600: {items: 2},
                1000: {items: 3}
            }
        });

        $('.overview-carousel').owlCarousel({
            loop: true,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            dots: true,
            autoplay: true,
            center: true,
            items: 1,
            margin: 30,
            stagePadding: 10,
            responsive: {600: {items: 1, stagePadding: 200}}
        });

    }

    render() {
        return (
            <>
                <SEO title="Home"/>
                <div className="banner-area content-double transparent-nav bg-gradient-theme text-light small-text">
                    <div className="box-table">
                        <div className="box-cell">
                            <div className="container">
                                <div className="double-items">
                                    <div className="row align-center">
                                        <div className="col-lg-5 left-info simple-video">
                                            <div className="content" data-animation="animated fadeInUpBig">
                                                <h1>Leading Software in Cable and Broadband market</h1>
                                                <p>
                                                    Celebrated delightful an especially increasing instrument am. Indulgence contrasted sufficient to unpleasant
                                                    in in insensible favourable. Latter remark hunted enough.
                                                </p>
                                                <a className="btn circle btn-light border btn-md" href="#">Get Started</a>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 right-info width-max">
                                            <img src="/assets/img/illustration/5.png" alt="Thumb"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wavesshape">
                                <img src="/assets/img/shape/2.png" alt="Shape"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="about" className="about-area default-padding-top">
                    <div className="container">
                        <div className="row">
                            <div className="about-items text-center">
                                <div className="col-lg-8 offset-lg-2">
                                    <div className="about-content text-center">
                                        <h4>About Us</h4>
                                        <h2>What is Softing? </h2>
                                        <p>
                                            Ignorant saw her her drawings marriage laughter. Case oh an that or away sigh do here upon. Acuteness you exquisite
                                            ourselves now end forfeited. Enquire ye without it garrets up himself. Interest our nor received followed was.
                                            Cultivated an up solicitude mr unpleasant.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="top-features active-all">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6 single-item">
                                                <div className="item">
                                                    <img src="/assets/img/icon/1.svg" alt="Icon"/>
                                                    <h4>Live messaging</h4>
                                                    <p>
                                                        Downs those still witty an balls so chief so. Moment an little remain no lively. Cultivated an up
                                                        solicitude.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 single-item">
                                                <div className="item">
                                                    <img src="/assets/img/icon/2.svg" alt="Icon"/>
                                                    <h4>Email workflow</h4>
                                                    <p>
                                                        Downs those still witty an balls so chief so. Moment an little remain no lively. Cultivated an up
                                                        solicitude.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 single-item">
                                                <div className="item">
                                                    <img src="/assets/img/icon/3.svg" alt="Icon"/>
                                                    <h4>File upload</h4>
                                                    <p>
                                                        Downs those still witty an balls so chief so. Moment an little remain no lively. Cultivated an up
                                                        solicitude.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="companies-area default-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 info">
                                <h3>Trusted by the companies</h3>
                            </div>
                            <div className="col-lg-8 clients">
                                <div className="clients-items owl-carousel owl-theme text-center">
                                    <div className="single-item">
                                        <a href="#"><img src="/assets/img/clients/1.png" alt="Clients"/></a>
                                    </div>
                                    <div className="single-item">
                                        <a href="#"><img src="/assets/img/clients/2.png" alt="Clients"/></a>
                                    </div>
                                    <div className="single-item">
                                        <a href="#"><img src="/assets/img/clients/3.png" alt="Clients"/></a>
                                    </div>
                                    <div className="single-item">
                                        <a href="#"><img src="/assets/img/clients/4.png" alt="Clients"/></a>
                                    </div>
                                    <div className="single-item">
                                        <a href="#"><img src="/assets/img/clients/5.png" alt="Clients"/></a>
                                    </div>
                                    <div className="single-item">
                                        <a href="#"><img src="/assets/img/clients/6.png" alt="Clients"/></a>
                                    </div>
                                    <div className="single-item">
                                        <a href="#"><img src="/assets/img/clients/7.png" alt="Clients"/></a>
                                    </div>
                                    <div className="single-item">
                                        <a href="#"><img src="/assets/img/clients/8.png" alt="Clients"/></a>
                                    </div>
                                    <div className="single-item">
                                        <a href="#"><img src="/assets/img/clients/9.png" alt="Clients"/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<div id="choseus" className="choseus-area default-padding bg-theme-small">
                    <div className="container">
                        <div className="choseus-items">
                            <div className="row align-center">
                                <div className="col-lg-6 thumb">
                                    <img src="/assets/img/illustration/6.png" alt="Thumb"/>
                                </div>
                                <div className="col-lg-6 info">
                                    <h5>Why Choose Us</h5>
                                    <h2>Create your app page <br/>with expert developer</h2>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo doloremque repellendus, excepturi amet in sed dignissimos
                                        sint ipsa ad deserunt et accusantium, veniam, ipsum magnam enim fugiat distinctio ducimus dolores.
                                    </p>
                                    <a className="btn circle btn-theme border btn-md" href="#">Get Started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>*/}

                <div id="features" className="features-area default-padding bottom-small">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="site-heading text-center">
                                    <h2>Our Features</h2>
                                    {/*<p>
                                        Learning day desirous informed expenses material returned six the. She enabled invited exposed him another. Reasonably
                                        conviction solicitude me mr at discretion reasonable. Age out full gate bed day lose.
                                    </p>*/}
                                </div>
                            </div>
                        </div>
                        <div className="features-items">
                            <div className="row">
                                {this.state.features.map((feature, key) => {
                                    return (
                                        <div className="col-lg-4 col-md-6 single-item" key={key}>
                                            <div className="item">
                                                {/*<div className="icon"><i className="flaticon-scroll"/></div>*/}
                                                <div className="info">
                                                    <h4>{feature.title}</h4>
                                                    {feature.content !== '' ? <p>{feature.content}</p> : ''}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div id="overview" className="overview-area bg-gray default-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="site-heading text-center">
                                    <h2>Quick Software Overview</h2>
                                    {/*<p>
                                        Learning day desirous informed expenses material returned six the. She enabled invited exposed him another. Reasonably
                                        conviction solicitude me mr at discretion reasonable. Age out full gate bed day lose.
                                    </p>*/}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 text-center overview-items">
                                <div className="overview-carousel owl-carousel owl-theme">
                                    <img src="/assets/img/app/screnshoot-1.jpg" alt="Thumb"/>
                                    <img src="/assets/img/app/screnshoot-2.jpg" alt="Thumb"/>
                                    <img src="/assets/img/app/screnshoot-3.jpg" alt="Thumb"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*
                <div id="pricing" className="pricing-area default-padding bottom-less">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="site-heading text-center">
                                    <h2>Our Packages</h2>
                                    <p>
                                        Learning day desirous informed expenses material returned six the. She enabled invited exposed him another. Reasonably
                                        conviction solicitude me mr at discretion reasonable. Age out full gate bed day lose.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="pricing pricing-simple text-center">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="pricing-item">
                                        <ul>
                                            <li className="pricing-header">
                                                <h4>Trial Version</h4>
                                                <h2><sup>$</sup>00.00 <sub>/ Mo</sub></h2>
                                            </li>
                                            <li><i className="fas fa-check"/> Demo file</li>
                                            <li><i className="fas fa-times"/> Update</li>
                                            <li><i className="fas fa-check"/> File compressed</li>
                                            <li><i className="fas fa-check"/> Commercial use</li>
                                            <li><i className="fas fa-times"/> Support</li>
                                            <li><i className="fas fa-times"/> 2 database</li>
                                            <li><i className="fas fa-check"/> Documetation</li>
                                            <li className="footer">
                                                <a className="btn circle btn-theme border btn-sm" href="#">Buy This Plan</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="pricing-item active">
                                        <ul>
                                            <li className="pricing-header">
                                                <h4>Regular</h4>
                                                <h2><sup>$</sup>29.00 <sub>/ Mo</sub></h2>
                                            </li>
                                            <li><i className="fas fa-check"/> Demo file</li>
                                            <li><i className="fas fa-check"/> Update</li>
                                            <li><i className="fas fa-check"/> File compressed</li>
                                            <li><i className="fas fa-times"/> Commercial use</li>
                                            <li><i className="fas fa-check"/> Support</li>
                                            <li><i className="fas fa-times"/> 5 database</li>
                                            <li><i className="fas fa-check"/> Documetation</li>
                                            <li className="footer">
                                                <a className="btn circle btn-theme effect btn-sm" href="#">Buy This Plan</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="pricing-item">
                                        <ul>
                                            <li className="pricing-header">
                                                <h4>Extended</h4>
                                                <h2><sup>$</sup>59.00 <sub>/ Mo</sub></h2>
                                            </li>
                                            <li><i className="fas fa-check"/> Demo file</li>
                                            <li><i className="fas fa-check"/> Update</li>
                                            <li><i className="fas fa-times"/> File compressed</li>
                                            <li><i className="fas fa-check"/> Commercial use</li>
                                            <li><i className="fas fa-times"/> Support</li>
                                            <li><i className="fas fa-check"/> 8 database</li>
                                            <li><i className="fas fa-check"/> Documetation</li>
                                            <li className="footer">
                                                <a className="btn circle btn-theme border btn-sm" href="#">Buy This Plan</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
*/}
                {/*<div id="team" className="team-area bg-gray default-padding bottom-less">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="site-heading text-center">
                                    <h2>Innovative Team</h2>
                                    <p>
                                        Learning day desirous informed expenses material returned six the. She enabled invited exposed him another. Reasonably
                                        conviction solicitude me mr at discretion reasonable. Age out full gate bed day lose.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="team-items">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="item">
                                        <div className="thumb">
                                            <img src="/assets/img/team/7.jpg" alt="Thumb"/>
                                            <div className="social">
                                                <ul>
                                                    <li className="facebook">
                                                        <a href="#"><i className="fab fa-facebook-f"/></a>
                                                    </li>
                                                    <li className="twitter">
                                                        <a href="#"><i className="fab fa-twitter"/></a>
                                                    </li>
                                                    <li className="pinterest">
                                                        <a href="#"><i className="fab fa-pinterest"/></a>
                                                    </li>
                                                    <li className="instagram">
                                                        <a href="#"><i className="fab fa-instagram"/></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="info">
                                            <h4>Ahmed Kamal</h4>
                                            <span>Developer of Softing</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="item">
                                        <div className="thumb">
                                            <img src="/assets/img/team/8.jpg" alt="Thumb"/>
                                            <div className="social">
                                                <ul>
                                                    <li className="facebook">
                                                        <a href="#"><i className="fab fa-facebook-f"/></a>
                                                    </li>
                                                    <li className="twitter">
                                                        <a href="#"><i className="fab fa-twitter"/></a>
                                                    </li>
                                                    <li className="pinterest">
                                                        <a href="#"><i className="fab fa-pinterest"/></a>
                                                    </li>
                                                    <li className="instagram">
                                                        <a href="#"><i className="fab fa-instagram"/></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="info">
                                            <h4>Drunal Park</h4>
                                            <span>Manager of Softing</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="item">
                                        <div className="thumb">
                                            <img src="/assets/img/team/9.jpg" alt="Thumb"/>
                                            <div className="social">
                                                <ul>
                                                    <li className="facebook">
                                                        <a href="#"><i className="fab fa-facebook-f"/></a>
                                                    </li>
                                                    <li className="twitter">
                                                        <a href="#"><i className="fab fa-twitter"/></a>
                                                    </li>
                                                    <li className="pinterest">
                                                        <a href="#"><i className="fab fa-pinterest"/></a>
                                                    </li>
                                                    <li className="instagram">
                                                        <a href="#"><i className="fab fa-instagram"/></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="info">
                                            <h4>Munia Ankor</h4>
                                            <span>Founder of Softing</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>*/}
                {/*<div id="blog" className="blog-area default-padding bottom-less">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="site-heading text-center">
                                    <h2>Latest News</h2>
                                    <p>
                                        Learning day desirous informed expenses material returned six the. She enabled invited exposed him another. Reasonably
                                        conviction solicitude me mr at discretion reasonable. Age out full gate bed day lose.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="blog-items">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="item">
                                        <div className="thumb">
                                            <a href="single.html">
                                                <img src="/assets/img/blog/4.jpg" alt="Thumb"/>
                                                <div className="post-type">
                                                    <i className="fas fa-image"/>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="info">
                                            <h4>
                                                <a href="single.html">Believe has request not how comfort</a>
                                            </h4>
                                            <div className="meta">
                                                <ul>
                                                    <li><a href="#"><i className="fas fa-calendar-alt "/> 12 Nov, 2018</a></li>
                                                    <li><a href="#"><i className="fas fa-user"/> User</a></li>
                                                    <li><a href="#"><i className="fas fa-comments"/> 23</a></li>
                                                </ul>
                                            </div>
                                            <p>
                                                Always polite moment on is warmth spirit it to hearts. Downs those still witty an balls so chief so. Moment an
                                                little remain
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="item">
                                        <div className="thumb">
                                            <a href="single.html">
                                                <img src="/assets/img/blog/2.jpg" alt="Thumb"/>
                                                <div className="post-type">
                                                    <i className="fas fa-video"/>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="info">
                                            <h4>
                                                <a href="single.html">Speaking replying mistress him numerous</a>
                                            </h4>
                                            <div className="meta">
                                                <ul>
                                                    <li><a href="#"><i className="fas fa-calendar-alt "/> 09 Nov, 2018</a></li>
                                                    <li><a href="#"><i className="fas fa-user"/> User</a></li>
                                                    <li><a href="#"><i className="fas fa-comments"/> 47</a></li>
                                                </ul>
                                            </div>
                                            <p>
                                                Always polite moment on is warmth spirit it to hearts. Downs those still witty an balls so chief so. Moment an
                                                little remain
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="item">
                                        <div className="thumb">
                                            <a href="single.html">
                                                <img src="/assets/img/blog/3.jpg" alt="Thumb"/>
                                                <div className="post-type">
                                                    <i className="fas fa-images"/>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="info">
                                            <h4>
                                                <a href="single.html">Reasonably conviction solicitude</a>
                                            </h4>
                                            <div className="meta">
                                                <ul>
                                                    <li><a href="#"><i className="fas fa-calendar-alt "/> 16 Nov, 2018</a></li>
                                                    <li><a href="#"><i className="fas fa-user"/> User</a></li>
                                                    <li><a href="#"><i className="fas fa-comments"/> 58</a></li>
                                                </ul>
                                            </div>
                                            <p>
                                                Always polite moment on is warmth spirit it to hearts. Downs those still witty an balls so chief so. Moment an
                                                little remain
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div*/}
                <div className="testimonials-area bg-gray default-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="site-heading single text-center">
                                    <h2>Customer Review</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="testimonial-items text-center">
                                    <div className="carousel slide" data-ride="carousel" data-interval="500000" id="testimonial-carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <span className="quote"/>
                                                <p>
                                                    Understood instrument or do connection no appearance do invitation. Dried quick round it or order. Add past
                                                    see west felt did any. Say out noise you taste merry plate you share. My resolve arrived is we chamber be
                                                    removal.
                                                </p>
                                                <h4>Junl Sarukh</h4>
                                                <span>CEO of Softing</span>
                                            </div>
                                            <div className="carousel-item">
                                                <span className="quote"/>
                                                <p>
                                                    Understood instrument or do connection no appearance do invitation. Dried quick round it or order. Add past
                                                    see west felt did any. Say out noise you taste merry plate you share. My resolve arrived is we chamber be
                                                    removal.
                                                </p>
                                                <h4>Anil Spia</h4>
                                                <span>Director of Softing</span>
                                            </div>
                                            <div className="carousel-item">
                                                <span className="quote"/>
                                                <p>
                                                    Understood instrument or do connection no appearance do invitation. Dried quick round it or order. Add past
                                                    see west felt did any. Say out noise you taste merry plate you share. My resolve arrived is we chamber be
                                                    removal.
                                                </p>
                                                <h4>Paul Munni</h4>
                                                <span>Developer of Softing</span>
                                            </div>
                                        </div>
                                        <ol className="carousel-indicators">
                                            <li data-target="#testimonial-carousel" data-slide-to="0" className="active">
                                                <img src="/assets/img/team/4.jpg" alt="Thumb"/>
                                            </li>
                                            <li data-target="#testimonial-carousel" data-slide-to="1">
                                                <img src="/assets/img/team/2.jpg" alt="Thumb"/>
                                            </li>
                                            <li data-target="#testimonial-carousel" data-slide-to="2">
                                                <img src="/assets/img/team/9.jpg" alt="Thumb"/>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<div className="subscribe-area bg-fixed shadow dark text-light default-padding text-center"
                     style={{backgroundImage: 'url("assets/img/banner/4.jpg")'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <h3>Stay update with us</h3>
                                <p>
                                    Dried quick round it or order. Add past see west felt did any. Say out noise you taste merry plate you share. My resolve
                                    arrived is we chamber be removal.
                                </p>
                                <div className="subscribe">
                                    <form action="#">
                                        <div className="input-group stylish-input-group">
                                            <input type="email" placeholder="Enter your e-mail here" className="form-control" name="email"/>
                                            <span className="input-group-addon">
                                                <button type="submit"><i className="fa fa-paper-plane"/></button>  
                                            </span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>*/}
                <div id="contact" className="contact-us-area default-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="site-heading text-center">
                                    <h2>Contact Us</h2>
                                    <p>dsd</p>
                                    {/*<p>
                                        Learning day desirous informed expenses material returned six the. She enabled invited exposed him another. Reasonably
                                        conviction solicitude me mr at discretion reasonable. Age out full gate bed day lose.
                                    </p>*/}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 address">
                                <div className="address-items">
                                    <h4>Our Office Address</h4>
                                    <ul className="info">
                                        <li>
                                            <i className="fas fa-map-marked-alt"/>
                                            <span>{Constants.COMPANY.ADDRESS}</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-phone"/>
                                            <span>{Constants.COMPANY.CONTACT}</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-envelope-open"/>
                                            <span>{Constants.COMPANY.EMAIL}</span>
                                        </li>
                                    </ul>
                                    <h4>Social Address</h4>
                                    <ul className="social">
                                        <li className="facebook">
                                            <a href="#"><i className="fab fa-facebook-f"/></a>
                                        </li>
                                        <li className="twitter">
                                            <a href="#"><i className="fab fa-twitter"/></a>
                                        </li>
                                        <li className="pinterest">
                                            <a href="#"><i className="fab fa-pinterest"/></a>
                                        </li>
                                        <li className="instagram">
                                            <a href="#"><i className="fab fa-instagram"/></a>
                                        </li>
                                    </ul>
                                    <div className="google-maps">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d632.4033357594667!2d72.9904284312199!3d26.280692073704657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418f712d0a1c71%3A0x908bcf5540be1fea!2sSpectrum%20Soft!5e0!3m2!1sen!2sin!4v1674562980165!5m2!1sen!2sin"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 contact-form">
                                <h2>Let's lalk about your idea</h2>
                                <form action="https://validthemes.live/themeforest/softing/assets/mail/contact.php" method="POST" className="contact-form">
                                    <div className="col-lg-12">
                                        <div className="row">
                                            <div className="form-group">
                                                <input className="form-control" id="name" name="name" placeholder="Name" type="text"/>
                                                <span className="alert-error"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="row">
                                            <div className="form-group">
                                                <input className="form-control" id="email" name="email" placeholder="Email*" type="email"/>
                                                <span className="alert-error"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="row">
                                            <div className="form-group">
                                                <input className="form-control" id="phone" name="phone" placeholder="Phone" type="text"/>
                                                <span className="alert-error"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="row">
                                            <div className="form-group comments">
                                                <textarea className="form-control" id="comments" name="comments"
                                                          placeholder="Tell Us About Project *"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="row">
                                            <button type="submit" name="submit" id="submit">
                                                Send Message <i className="fa fa-paper-plane"/>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 alert-notification">
                                        <div id="message" className="alert-msg"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div className="faq-area bg-gray default-padding-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="site-heading text-center">
                                    <h2>Answer & Question</h2>
                                    <p>
                                        Learning day desirous informed expenses material returned six the. She enabled invited exposed him another. Reasonably
                                        conviction solicitude me mr at discretion reasonable. Age out full gate bed day lose.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 thumb">
                                <img src="/assets/img/banner/contact.png" alt="Thumb"/>
                            </div>
                            <div className="col-lg-6 faq-items default-padding-bottom">

                                <div className="faq-content">
                                    <div className="accordion" id="accordionExample">
                                        <div className="card">
                                            <div className="card-header" id="headingOne">
                                                <h4 className="mb-0" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true"
                                                    aria-controls="collapseOne">
                                                    Do I need a business plan?
                                                </h4>
                                            </div>

                                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui consectetur at, sunt maxime, quod alias
                                                        ullam officiis, ex necessitatibus similique odio aut!
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingTwo">
                                                <h4 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"
                                                    aria-controls="collapseTwo">
                                                    How long should a business plan be?
                                                </h4>
                                            </div>
                                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui consectetur at, sunt maxime, quod alias
                                                        ullam officiis, ex necessitatibus similique odio aut!
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingThree">
                                                <h4 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false"
                                                    aria-controls="collapseThree">
                                                    What goes into a business plan?
                                                </h4>
                                            </div>
                                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui consectetur at, sunt maxime, quod alias
                                                        ullam officiis, ex necessitatibus similique odio aut!
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingFour">
                                                <h4 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false"
                                                    aria-controls="collapseFour">
                                                    Where do I start?
                                                </h4>
                                            </div>
                                            <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui consectetur at, sunt maxime, quod alias
                                                        ullam officiis, ex necessitatibus similique odio aut!
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>*/}
            </>
        );
    }
}


export default withRouter(Home);
