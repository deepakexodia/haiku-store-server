import React, { Component } from 'react';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const Furniture = () => (
	<Fragment>
		<section className="section">
			<div className="container has-text-centered">
				<h1
					className="title has-text-weight-light"
					style={{ color: '#726658', marginTop: '30px', marginBottom: '40px' }}
				>
					Welcome to Haiku Wares
				</h1>
				<h2 className="subtitle subhide">
					Haiku wares provides handcrafted, custom wood furniture that is made
					sustainably. We recognise and cherish Japan’s strong values of
					craftsmanship and sustainability, and we're doing our part to help
					spread those values across the country and the world.
				</h2>
			</div>

			<div className="container" style={{ marginTop: '60px' }}>
				<figure className="image">
					<img src="https://res.cloudinary.com/dmjvm8vzc/image/upload/v1557660752/furnituretxet.jpg" />
				</figure>
			</div>

			<div className="container" style={{ marginTop: '60px' }}>
				<h1
					className="title has-text-weight-light  has-text-centered"
					style={{ color: '#726658' }}
				>
					Product categories
				</h1>
				<div class="columns zoomimage">
					<NavLink to="chair">
						<div class="column">
							<h2 class="subtitle has-text-centered category-text">CHAIR</h2>
							<figure class="image">
								<img src="https://cdn.condehouse.co.jp/upload/save_image/product/01100639_5a55b52d68733.jpg" />
							</figure>
						</div>
					</NavLink>
					<NavLink to="table">
						<div class="column">
							<h2 class="subtitle has-text-centered category-text">TABLE</h2>
							<figure class="image">
								<img src="https://cdn.condehouse.co.jp/upload/save_image/product/06150434_5b2341db73958.jpg" />
							</figure>
						</div>
					</NavLink>
					<NavLink to="sofa">
						<div class="column">
							<h2 class="subtitle has-text-centered category-text">SOFA</h2>
							<figure class="image">
								<img src="https://cdn.condehouse.co.jp/upload/save_image/product/07071123_53ba8328c37ea.jpg" />
							</figure>
						</div>
					</NavLink>
					<NavLink to="cabinets">
						<div class="column">
							<h2 class="subtitle has-text-centered category-text">CABINETS</h2>
							<figure class="image">
								<img src="https://cdn.condehouse.co.jp/upload/save_image/product/03250449_53310aeb80b4a.jpg" />
							</figure>
						</div>
					</NavLink>
				</div>
			</div>
		</section>
	</Fragment>
);

export default Furniture;
