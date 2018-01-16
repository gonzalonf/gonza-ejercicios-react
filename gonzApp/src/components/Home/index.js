import React from 'react';

class Home extends React.Component
{
	constructor() {
		super();
		this.state = {
			titleStyle: {

			},
			titleStyleOn: false,
			buttonStyle: {
				padding: "5px",
				background: "purple",
				color: "white",
				fontWeight: "bold",
				cursor: "pointer"
			}
		};
	}
	handleClick(){
		const newStyle = {
			color: "red",
			background: "yellow",
			border: "dashed 2px black"
		};
		this.setState ({
			titleStyle: !this.state.titleStyleOn ? newStyle : {},
			titleStyleOn: !this.state.titleStyleOn
		});
	}
	render () {

		return (
		<div className="contents home-container">
			<h1 style={this.state.titleStyle}>Bienvenido al HOME, wachos</h1>

			<button
				onClick={this.handleClick.bind(this)}
				style={this.state.buttonStyle}>
					Do Random Stuff
			</button>

		</div>
		);
	}
};

export default Home;
