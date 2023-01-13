import React from "react";
import './css/opening.css'

const Opening = () => {
	return (

		<div className="untitled">
			<div className="untitled__slides">
				<div className="untitled__slide">
					<div className="untitled__slideBg"></div>
					<div className="untitled__slideContent">
						<span>Good Food</span>
						<span>Good Mood</span>
						<a className="button" href="/" target="/black">Sign Up</a>
					</div>
				</div>
				<div className="untitled__slide">
					<div className="untitled__slideBg"></div>
					<div className="untitled__slideContent">

						<span>Nourish To Flourish</span>
						{/* <span>This Covered</span> */}
						<a className="button" href="/" target="/black">Sign Up</a>
					</div>
				</div>
				<div className="untitled__slide">
					<div className="untitled__slideBg"></div>
					<div className="untitled__slideContent">
						<span> Savor The Flavour</span>
						<span>With our Special Meals</span>
						<a className="button" href="/" target="/black">Sign Up</a>
					</div>
				</div>
				<div className="untitled__slide">
					<div className="untitled__slideBg"></div>
					<div className="untitled__slideContent">
						<span>Count the Memories</span>
						<span>Not the Calories</span>
						<a className="button" href="/" target="/black">Sign Up</a>
					</div>
				</div>
			</div>
			<div className="untitled__shutters"></div>
		</div>
	);
};
export default Opening;
