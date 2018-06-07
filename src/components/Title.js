import React from 'react';

class Title extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
            <div className="container">
                <div>
                    <h1>To do List</h1>
                    <p>Task number: {this.props.counter}</p>
                </div>
            </div>
		);
	}
}
export default Title;