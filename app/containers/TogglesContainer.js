import React, { Component, PropTypes } from 'react'
import Toggle from '../components/Toggle'
// import{ getSearchResult } from '../utils/foodHelpers'
import {connect} from 'react-redux'
import actions from '../actions/actions'


class TogglesContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      sitesList:['groopanda','gustazos','oferta']
    }
    // const list = getSearchResult("Cheese");
  }

  componentWillReceiveProps(props) {
    }

  onTextChange(event){
    // this.setState({
    //   value: event.target.value
    // })
    // console.log(event.target.value)
    // this.props.dispatch(actions.searchProfesor(this.state.value));
  }

  handleToogle(event){
    event.preventDefault();
    console.log("submitted");
  }

  // async 
  // componentWillMount(){
  //   this.props.dispatch(actions.getTodoList());
  // }

  render() {
    // console.log("list",this.state.list)

    return (
      <div>
        <Toggle dispatch={this.props.dispatch} list={this.state.sitesList} handleToogle={this.handleSubmit}/>
      </div>      
    )}
    
}

export default TogglesContainer;