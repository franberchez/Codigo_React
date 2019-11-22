import React from 'react';
import Hijo from './components/Hijo.js';

class App extends React.Component{

	constructor(){
		super();
		this.state = {
			clicked: false
		}
		this.containerRef= null;
		this.setContainerRef= element => { this.containerRef = element;};
	}

	handleOnClick(){
		if(this.containerRef){
			this.containerRef.classList.toggle('red');
			this.setState({clicked: !this.state.clicked});
		}
	}

  	render() {
  		const {clicked} = this.state;
  		return(
    		<div id="Componente_Padre" ref={this.setContainerRef} onClick={() => this.handleOnClick()}>
    		<h1>Soy el componente padre</h1>

    		<Hijo parentContainerClicked={clicked}/>
    	</div>
    	);
  	}
}

export default App;
