import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Posts extends Component {
	render() {
		const topic = ["Round Icons", "Startup Framework", "Treehouse", "Golden", "Escape", "Dreams"];
		const intro = ["...", "...", "...", "...", "...", "..."];
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
// export default class Posts extends Component {
// 	render() {
// 		const postIDs = ["1", "3", "5", "7", "9"];
// 		const lists = postIDs.map((i, index) => (
// 			<li key={index}>
// 				<NavLink to={"/posts/" + i}>Posts #{i}</NavLink>
// 			</li>
// 		));
// 		return (
// 			<div>
// 				<h3>Click to view article ---</h3>
// 				{lists}
// 			</div>
// 		);
// 	}
// }
