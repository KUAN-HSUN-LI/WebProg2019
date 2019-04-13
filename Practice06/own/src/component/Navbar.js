import React, { Component } from "react";

export default ({ index }) => {
	return (
		<nav id="mainNav" className="navbar navbar-default navbar-custom navbar-fixed-top container">
			{/* <div className=""> */}
			<div className="navbar-header page-scroll">
				<a className="navbar-brand page-scroll" href="#page-top">
					Top
				</a>
			</div>

			<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				<ul className="nav navbar-nav navbar-right" id="test">
					{index.map(e => (
						<li key={e}>
							<a className="page-scroll" href="#services">
								{e}
							</a>
						</li>
					))}
				</ul>
			</div>
			{/* </div> */}
		</nav>
	);
};
