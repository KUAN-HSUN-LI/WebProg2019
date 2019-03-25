import React, { Component } from 'react';
import avatar from "./images/avatar.png";
import cv_link from "./assets/CV.pdf";
import nehs_logo from "./images/nehs-logo.png";
import ntu_logo from "./images/ntu-logo.png";
import wq_logo from "./images/wq-logo.png";

import "./assets/css/main.css"

class Nav extends Component {
	render() {
		const listItems = this.props.tags.map(tag =>
			<li><a href={`#${tag}`}>{tag.charAt(0).toUpperCase() + tag.slice(1)}</a></li>
		);
		return (
			<nav id="nav">
				<ul class="container">
					{listItems}
				</ul>
			</nav>
		);
	}
}

class Intro extends Component {
	render() {
		return (
			<article id="top" class="wrapper style1">
				<div class="container">
					<div class="row">
						<div class="col-4 col-5-large col-12-medium">
							<span class="image fit"><img src={this.props.avatar} alt="" /></span>
						</div>
						<div class="col-8 col-7-large col-12-medium">
							<header>
								<h1>Hi. I'm <strong>{this.props.name}</strong>.</h1>
							</header>
							<div>{this.props.introduction}</div>
							<p>Here is my <a href={this.props.cv_link}>curriculum vitae</a>.</p>
						</div>
					</div>
				</div>
			</article>
		);
	}
}

class Experience extends Component {
	render() {
		return (
			<div class="col-4 col-6-medium col-12-small">
				<section class="box style1">
					<span class="icon featured">
						<img src={this.props.logo}></img>
					</span>
					<h3>{this.props.location}</h3>
					<p>{this.props.title}<br></br>{this.props.timeSpan}</p>
				</section>
			</div>
		);
	}
}

class Background extends Component {
	render() {
		return (
			<article id="about" class="wrapper style2">
				<div class="container">
					<header>
						<h2>Background and Experiences</h2>
						<p>{this.props.header}</p>
					</header>
					<div class="row aln-center">
						{this.props.experiences}
					</div>
				</div>
			</article>
		);
	}
}

class Works extends Component {
	render() {
		return (
			<article id="works" class="wrapper style3">
				<div class="container">
					<header>
						<h2>Personal Projects</h2>
						<p>{this.props.header}</p>
					</header>
					<div class="row">
						{this.props.projects}
					</div>
				</div>
			</article>
		);
	}
}

class Project extends Component {
	render() {
		return(
			<div class="col-4 col-6-medium col-12-small">
				<article class="box style2">
					<h3><a href={this.props.link}>{this.props.name}</a></h3>
					<div>{this.props.explanation}</div>
				</article>
			</div>
		);
	}
}

class Contact extends Component {
	render() {
		return(
			<article id="contact" class="wrapper style4">
				<div class="container medium">
					<div class="row">
						<div class="col-12">
							<h3>{this.props.header}</h3>
							<ul class="social">
								<li><a href={this.props.link.facebook} class="icon fa-facebook"><span class="label">Facebook</span></a></li>
								<li><a href={this.props.link.linkedin} class="icon fa-linkedin"><span class="label">LinkedIn</span></a></li>
								<li><a href={this.props.link.github} class="icon fa-github"><span class="label">Github</span></a></li>
							</ul>
						</div>
					</div>
				</div>
			</article>
		);
	}
}

class App extends Component {
	render() {
		return (
			<div>
				<Nav tags={["top", "about", "works", "contact"]} />
				<Intro 
					avatar={avatar} 
					name={"Brian Chao"} 
					cv_link={cv_link}
					introduction={
						<p>I am a sophomore at National Taiwan University majoring in Electrical Engineering. 
						I started exploring the open source community in 2019, and has since maintained a 2000+ 
						star project. I am comfortable coding in C++, Python, and is a beginner in Javascript.</p>
					}
				/>
				<Background
					header="A little bit about myself."
					experiences={
						[
							<Experience 
								logo={nehs_logo}
								location="National Experimental High School"
								title="Class of Science"
								timeSpan="2014 ~ 2017"
							/>,
							<Experience 
								logo={ntu_logo}
								location="National Taiwan University"
								title="B.S. in Electrical Engineering"
								timeSpan="2017 ~ Present"/>,
							<Experience 
								logo={wq_logo}
								location="WorldQuant LLC, Taiwan"
								title="Research Intern"
								timeSpan="2019/1 ~ 2019/2"/>
						]
					}
				/>
				<Works
					header="Nothing more than a chunk of code."
					projects={
						[
							<Project 
								link="https://github.com/Mckinsey666/bullet"
								name="bullet"
								explanation={
									<p>A Python package to build sassy command line interactive prompts.
										A <b>2333</b> ⭐ project on Github!"</p>
								}
							/>,
							<Project 
								link="https://github.com/Mckinsey666/vocabs"
								name="vocabs"
								explanation={
									<p>A lightweight online-dictionary integration to the command line. 
										A <b>208</b> ⭐ project on Github!</p>
								}
							/>,
							<Project 
								link="https://github.com/Mckinsey666/ACGAN-Conditional-Anime-Generation"
								name="Anime Generation"
								explanation={
									<p>Anime Generation using <b>Auxiliary Classifier GAN</b>, or <b>ACGAN</b>.
									Users can generate anime characters by specifying hair and eye colors.</p>
								}
							/>,
							<Project
								link="https://github.com/Mckinsey666/Fun-with-MNIST"
								name="ML Generative Models"
								explanation={
									<p>Implementation of various machine learning generative models, including 
										various types of <b>GANs</b>, <b>autoencoders</b>, and etc.</p>
								}
							/>,
							<Project
								link="https://github.com/Mckinsey666/lyricsfinder"
								name="Lyrics Finder"
								explanation={
									<p>A <b>Tkinter</b>-based desktop app to search for lyrics online.</p>
								}
							/>,
							<Project
								link="https://github.com/Mckinsey666/Leetcode-Python"
								name="Leetcode Solutions"
								explanation={
									<p>Solutions to <b>Leetcode</b> Algorithm problems.</p>
								}
							/>
						]
					}
				/>
				<Contact 
					header="Find me on ..."
					link={
						{
							facebook: "https://www.facebook.com/dshsdhtgeheth.dgshsgedhegh",
							linkedin: "https://www.linkedin.com/in/brian-chao-85425415a/",
							github: "https://github.com/Mckinsey666"
						}
					}
				/>
			</div>
		);
	}
}

export default App;
