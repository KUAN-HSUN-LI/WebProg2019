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
