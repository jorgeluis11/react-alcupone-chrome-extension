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

	puke(site){
		return JSON.stringify(site)
	}

	onToggle(id) {
		this.props.dispatch(actions.toggleGroupon(id));
	}

	render(){
		const customClass = !this.props.site.active?`groupon-image from-logo ${this.props.site.name}`:`groupon-image from-logo ${this.props.site.name} `
		const buttonClass =  !this.props.site.active?`btn btn-red-outline toggle-col ${this.props.site.name}`:`btn btn-red-outline toggle-col ${this.props.site.name} active`
		return (
			<center onClick={()=> this.onToggle(this.props.id)} key={this.props.id} className={buttonClass}>
        		<div className={customClass}>
        		</div>
        	</center>
		)
	}

}
						// <div class="choice tooltip-set active" data-filter-target="cost_type" data-cost="short_term_cost" title=""><i class="fa fa-plane"></i><span></span></div>


// <center>
// 				<input
// 				 type='text'
// 				 placeholder="Search a profesor!"
// 				 onChange={(event) => this.onTextChange(event)}/>
// 			</center>


export default Toggle;