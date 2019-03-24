import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <body id="page-top" className="index">
                {/* <Navigation /> */}

                <nav id="mainNav" className="navbar navbar-default navbar-custom navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header page-scroll">
                            <a className="navbar-brand page-scroll" href="#page-top">
                                Start
                            </a>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right" id="test">
                                {this.props.index.map(e => (
                                    <li>
                                        <a className="page-scroll" href="#services">
                                            {e}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </nav>
                <Header />
                <section id="services">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading">Services</h2>
                                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                            </div>
                        </div>

                        <div className="row text-center">
                            {this.props.services.head.map((value, index) => (
                                <div className="col-md-4">
                                    <span className="fa-stack fa-4x">
                                        <i className="fa fa-circle fa-stack-2x text-primary" />
                                        <i className="fa fa-shopping-cart fa-stack-1x fa-inverse" />
                                    </span>
                                    <h4 className="service-heading">{value}</h4>
                                    <p className="text-muted">{this.props.services.main[index]}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <Portfolio />
                <About />
                <Team />
                {/* <Clients /> */}
                <Contact />
            </body>
        );
    }
}
// const index1 = ['Services', 'Portfolio', 'About', 'Team', 'Contact'];

// class Navigation extends Component {
//     render() {
//         return (
//             <nav id="mainNav" className="navbar navbar-default navbar-custom navbar-fixed-top">
//                 <div className="container">
//                     <div className="navbar-header page-scroll">
//                         {/* <button
//                             type="button"
//                             className="navbar-toggle"
//                             data-toggle="collapse"
//                             data-target="#bs-example-navbar-collapse-1"
//                         >
//                             <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars" />
//                         </button> */}
//                         <a className="navbar-brand page-scroll" href="#page-top">
//                             Start
//                         </a>
//                     </div>

//                     <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
//                         <ul className="nav navbar-nav navbar-right" id="test">
//                             {/* <li className="hidden">
//                                 <a href="#page-top" />
//                             </li> */}
//                             {this.props.index.map(e => (
//                                 <li>
//                                     <a className="page-scroll" href="#services">
//                                         {e}
//                                     </a>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         );
//     }
// }

class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="intro-text">
                        <div className="intro-lead-in">Welcome To Our Studio!</div>
                        <div className="intro-heading">It's Nice To Meet You</div>
                        <a href="#services" className="page-scroll btn btn-xl">
                            Tell Me More
                        </a>
                    </div>
                </div>
            </header>
        );
    }
}

// class ServicesSection extends Component {
//     render() {
//         return (
//             <section id="services">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-12 text-center">
//                             <h2 className="section-heading">Services</h2>
//                             <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
//                         </div>
//                     </div>
//                     <div className="row text-center">
//                         <div className="col-md-4">
//                             <span className="fa-stack fa-4x">
//                                 <i className="fa fa-circle fa-stack-2x text-primary" />
//                                 <i className="fa fa-shopping-cart fa-stack-1x fa-inverse" />
//                             </span>
//                             <h4 className="service-heading">E-Commerce</h4>
//                             <p className="text-muted">
//                                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo
//                                 inventore harum ex magni, dicta impedit.
//                             </p>
//                         </div>
//                         <div className="col-md-4">
//                             <span className="fa-stack fa-4x">
//                                 <i className="fa fa-circle fa-stack-2x text-primary" />
//                                 <i className="fa fa-laptop fa-stack-1x fa-inverse" />
//                             </span>
//                             <h4 className="service-heading">Responsive Design</h4>
//                             <p className="text-muted">
//                                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo
//                                 inventore harum ex magni, dicta impedit.
//                             </p>
//                         </div>
//                         <div className="col-md-4">
//                             <span className="fa-stack fa-4x">
//                                 <i className="fa fa-circle fa-stack-2x text-primary" />
//                                 <i className="fa fa-lock fa-stack-1x fa-inverse" />
//                             </span>
//                             <h4 className="service-heading">Web Security</h4>
//                             <p className="text-muted">
//                                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo
//                                 inventore harum ex magni, dicta impedit.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         );
//     }
// }

class Portfolio extends Component {
    render() {
        return (
            <section id="portfolio" className="bg-light-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading">Portfolio</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-6 portfolio-item">
                            <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content">
                                        <i className="fa fa-plus fa-3x" />
                                    </div>
                                </div>
                                <img src="img/portfolio/roundicons.jpg" className="img-responsive" alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <h4>Round Icons</h4>
                                <p className="text-muted">Graphic Design</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 portfolio-item">
                            <a href="#portfolioModal2" className="portfolio-link" data-toggle="modal">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content">
                                        <i className="fa fa-plus fa-3x" />
                                    </div>
                                </div>
                                <img src="img/portfolio/startup-framework.jpg" className="img-responsive" alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <h4>Startup Framework</h4>
                                <p className="text-muted">Website Design</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 portfolio-item">
                            <a href="#portfolioModal3" className="portfolio-link" data-toggle="modal">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content">
                                        <i className="fa fa-plus fa-3x" />
                                    </div>
                                </div>
                                <img src="img/portfolio/treehouse.jpg" className="img-responsive" alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <h4>Treehouse</h4>
                                <p className="text-muted">Website Design</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 portfolio-item">
                            <a href="#portfolioModal4" className="portfolio-link" data-toggle="modal">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content">
                                        <i className="fa fa-plus fa-3x" />
                                    </div>
                                </div>
                                <img src="img/portfolio/golden.jpg" className="img-responsive" alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <h4>Golden</h4>
                                <p className="text-muted">Website Design</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 portfolio-item">
                            <a href="#portfolioModal5" className="portfolio-link" data-toggle="modal">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content">
                                        <i className="fa fa-plus fa-3x" />
                                    </div>
                                </div>
                                <img src="img/portfolio/escape.jpg" className="img-responsive" alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <h4>Escape</h4>
                                <p className="text-muted">Website Design</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 portfolio-item">
                            <a href="#portfolioModal6" className="portfolio-link" data-toggle="modal">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content">
                                        <i className="fa fa-plus fa-3x" />
                                    </div>
                                </div>
                                <img src="img/portfolio/dreams.jpg" className="img-responsive" alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <h4>Dreams</h4>
                                <p className="text-muted">Website Design</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

class About extends Component {
    render() {
        return (
            <section id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading">About</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="timeline">
                                <li>
                                    <div className="timeline-image">
                                        <img className="img-circle img-responsive" src="img/about/1.jpg" alt="" />
                                    </div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h4>2009-2011</h4>
                                            <h4 className="subheading">Our Humble Beginnings</h4>
                                        </div>
                                        <div className="timeline-body">
                                            <p className="text-muted">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius
                                                sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde,
                                                sed, incidunt et ea quo dolore laudantium consectetur!
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline-inverted">
                                    <div className="timeline-image">
                                        <img className="img-circle img-responsive" src="img/about/2.jpg" alt="" />
                                    </div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h4>March 2011</h4>
                                            <h4 className="subheading">An Agency is Born</h4>
                                        </div>
                                        <div className="timeline-body">
                                            <p className="text-muted">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius
                                                sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde,
                                                sed, incidunt et ea quo dolore laudantium consectetur!
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="timeline-image">
                                        <img className="img-circle img-responsive" src="img/about/3.jpg" alt="" />
                                    </div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h4>December 2012</h4>
                                            <h4 className="subheading">Transition to Full Service</h4>
                                        </div>
                                        <div className="timeline-body">
                                            <p className="text-muted">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius
                                                sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde,
                                                sed, incidunt et ea quo dolore laudantium consectetur!
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline-inverted">
                                    <div className="timeline-image">
                                        <img className="img-circle img-responsive" src="img/about/4.jpg" alt="" />
                                    </div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h4>July 2014</h4>
                                            <h4 className="subheading">Phase Two Expansion</h4>
                                        </div>
                                        <div className="timeline-body">
                                            <p className="text-muted">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius
                                                sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde,
                                                sed, incidunt et ea quo dolore laudantium consectetur!
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline-inverted">
                                    <div className="timeline-image">
                                        <h4>
                                            Be Part <br />
                                            Of Our <br />
                                            Story!
                                        </h4>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

class Team extends Component {
    render() {
        return (
            <section id="team" className="bg-light-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading">Our Amazing Team</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="team-member">
                                <img src="img/team/1.jpg" className="img-responsive img-circle" alt="" />
                                <h4>Kay Garland</h4>
                                <p className="text-muted">Lead Designer</p>
                                <ul className="list-inline social-buttons">
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-facebook" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-linkedin" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="team-member">
                                <img src="img/team/2.jpg" className="img-responsive img-circle" alt="" />
                                <h4>Larry Parker</h4>
                                <p className="text-muted">Lead Marketer</p>
                                <ul className="list-inline social-buttons">
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-facebook" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-linkedin" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="team-member">
                                <img src="img/team/3.jpg" className="img-responsive img-circle" alt="" />
                                <h4>Diana Pertersen</h4>
                                <p className="text-muted">Lead Developer</p>
                                <ul className="list-inline social-buttons">
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-facebook" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-linkedin" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 text-center">
                            <p className="large text-muted">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos
                                non quis ad perspiciatis, totam corporis ea, alias ut unde.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

class Clients extends Component {
    render() {
        return (
            <aside className="clients">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <a href="#">
                                <img src="img/logos/envato.jpg" className="img-responsive img-centered" alt="" />
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <a href="#">
                                <img src="img/logos/designmodo.jpg" className="img-responsive img-centered" alt="" />
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <a href="#">
                                <img src="img/logos/themeforest.jpg" className="img-responsive img-centered" alt="" />
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <a href="#">
                                <img src="img/logos/creative-market.jpg" className="img-responsive img-centered" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </aside>
        );
    }
}

class Contact extends Component {
    render() {
        return (
            <div>
                <section id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading">Contact Us</h2>
                                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <form name="sentMessage" id="contactForm" novalidate>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Your Name *"
                                                    id="name"
                                                    required
                                                    data-validation-required-message="Please enter your name."
                                                />
                                                <p className="help-block text-danger" />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Your Email *"
                                                    id="email"
                                                    required
                                                    data-validation-required-message="Please enter your email address."
                                                />
                                                <p className="help-block text-danger" />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="tel"
                                                    className="form-control"
                                                    placeholder="Your Phone *"
                                                    id="phone"
                                                    page
                                                    required
                                                    data-validation-required-message="Please enter your phone number."
                                                />
                                                <p className="help-block text-danger" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <textarea
                                                    className="form-control"
                                                    placeholder="Your Message *"
                                                    id="message"
                                                    required
                                                    data-validation-required-message="Please enter a message."
                                                />
                                                <p className="help-block text-danger" />
                                            </div>
                                        </div>
                                        <div className="clearfix" />
                                        <div className="col-lg-12 text-center">
                                            <div id="success" />
                                            <button type="submit" className="btn btn-xl">
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <span className="copyright">Copyright &copy; Your Website 2016</span>
                            </div>
                            <div className="col-md-4">
                                <ul className="list-inline social-buttons">
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-facebook" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-linkedin" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul className="list-inline quicklinks">
                                    <li>
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#">Terms of Use</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default App;
// export { Navigation };
