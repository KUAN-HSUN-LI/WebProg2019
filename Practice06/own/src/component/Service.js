import React from "react";
export default () => {
	const services = { head: ["E-Commerce", "Responsive Design", "Web Security"], main: ["...", "...", "..."] };

	return (
		<section id="services">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 text-center">
						<h2 className="section-heading">Services</h2>
						<h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
					</div>
				</div>

				<div className="row text-center">
					{services.head.map((value, index) => (
						<div className="col-md-4" key={value}>
							<span className="fa-stack fa-4x">
								<i className="fa fa-circle fa-stack-2x text-primary" />
								<i className="fa fa-shopping-cart fa-stack-1x fa-inverse" />
							</span>
							<h4 className="service-heading">{value}</h4>
							<p className="text-muted">{services.main[index]}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
