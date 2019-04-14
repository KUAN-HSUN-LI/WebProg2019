import React, { Component } from "react";

export default class Article extends Component {
	render() {
		const topic = ["Round Icons", "Startup Framework", "Treehouse", "Golden", "Escape", "Dreams"];
		const intro = ["...", "...", "...", "...", "...", "..."];
		return (
			<section id="portfolio" className="bg-light-gray">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 text-center">
							<h2 className="section-heading">Article</h2>
							<h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
						</div>
					</div>
					<div className="row">
						{topic.map((value, index) => (
							<div className="col-md-4 col-sm-6 portfolio-item">
								<a href={"#portfolioModal" + toString(index + 1)} className="portfolio-link" data-toggle="modal">
									<div className="portfolio-hover">
										<div className="portfolio-hover-content">
											<i className="fa fa-plus fa-3x" />
										</div>
									</div>
									<img src="img/portfolio/roundicons.jpg" className="img-responsive" alt="" />
								</a>
								<div className="portfolio-caption">
									<h4>{value}</h4>
									<p className="text-muted">{intro[index]}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		);
	}
}
