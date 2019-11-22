import React from 'react';
import '../App.css';

class Hijo extends React.Component{
	constructor (props) {
		super(props);
		this.subHeaderRef= null;
		this.setSubHeaderRef = element => { this.subHeaderRef= element;};
	}

	componentDidUpdate () {
		const {parentContainerClicked} = this.props;

		if( parentContainerClicked){
			this.subHeaderRef.classList.add('blue');
		}
		else {
			this.subHeaderRef.classList.remove('blue');
		}
	}
	render() {
		return (
	    	<div id="Componente_Hijo" ref={this.setSubHeaderRef}>
	    		<h2>Soy el componente hijo</h2>
	    	</div>
		);
	}
}

export default Hijo;