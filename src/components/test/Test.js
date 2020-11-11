import React, { Component } from "react";

class Test extends Component {

	state = {
		title: "",
		body: ""
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/posts/1")
			.then((response) => response.json())
			.then((data) =>this.setState({
				title: data.title,
				body: data.body
			}));
	}

	// componentWillUnmount() {
	// 	console.log("will mount");
	// }

	// componentDidUpdate() {
	//     console.log("Component did update")
	// }

	// static getDerivedStateFromProps(nextProps, prevState) {
	//     return null;
	// }

	// getSnapshotBeforeUpdate(prevProps, prevState) {

	// }

	render() {
		const { title, body } = this.state;
		return (
			<div>
				<h1>{title}</h1>
				<h2>{body}</h2>
			</div>
		);
	}
}

export default Test;
