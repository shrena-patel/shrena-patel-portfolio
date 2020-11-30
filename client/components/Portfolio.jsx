import React from 'react';
import Nav from './Nav';

const Portfolio = () => {
	return (
		<>
			<div className="hero">
				<div className="hero-text">
					<div className="portfolio-container">
						<div className="portfolio-card">
							<div className="content">
								<p>KererūGo</p>
								<p className="card-text">Final Group project at EDA.</p>
								<button className="card-button">view code</button>
							</div>
						</div>
						<div className="portfolio-card">
							<div className="content">
								<p>TodoList</p>
								<p className="card-text">A full stack todo list app.</p>
								<button className="card-button">view code</button>
							</div>
						</div>
						<div className="portfolio-card">
							<div className="content">
								<p>ConnectR</p>
								<p className="card-text">A personal project.</p>
								<button className="card-button">view code</button>
							</div>
						</div>
						<div className="portfolio-card">
							<div className="content">
								<p>Blog</p>
								<p className="card-text">First project at EDA.</p>
								<button className="card-button">view code</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Portfolio;
