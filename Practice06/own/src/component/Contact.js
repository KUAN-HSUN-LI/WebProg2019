import React, { Component } from "react";

export default class Contact extends Component {
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
