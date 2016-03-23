import React, { Component, PropTypes } from 'react'
import Toggle from '../components/Toggle'
// import{ getSearchResult } from '../utils/foodHelpers'
import {connect} from 'react-redux'
import actions from '../actions/actions'


class TogglesContainer extends Component {
  constructor(props){
    super(props)
    // this.handleToggle.bind(this);
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

  handleToggle(id){
    // console.log("aaa")
    // console.log(this)
    // this.state.list[id-1].active = !this.state.list[id-1].active;

  }
  

  // async 
  // componentWillMount(){
  //   this.props.dispatch(actions.getTodoList());
  // }

  render() {
    // console.log("list",this.props)
    return (
      <div className="row">
        {
          this.props.list.map((site, i) => <Toggle dispatch={this.props.dispatch} site={site} id={i} />)
        }
      </div>      
    )}
    
}

export default TogglesContainer;