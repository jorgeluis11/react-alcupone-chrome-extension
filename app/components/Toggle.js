import React, { Component, PropTypes } from 'react'
import actions from '../actions/actions'

class Toggle extends Component{
	constructor(props){
		super(props)
		// this.state = {
		// 	value:""
		// }
	}


	// onSubmit(event){
	// 	event.preventDefault();
	// // 	for(var i =0 ; i< 1000; i++)
	// // {			
	// 	this.props.dispatch(actions.addTodo(this.state.value));
	// // }	
	// }

	render(){
		return (
			<div className="row">
				{
					this.props.list.map(site => <div className="col-md-4">{site}</div>)
				}
			</div>
			
		)
	}

}

// <center>
// 				<input
// 				 type='text'
// 				 placeholder="Search a profesor!"
// 				 onChange={(event) => this.onTextChange(event)}/>
// 			</center>


export default Toggle;