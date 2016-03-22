import React, { Component } from 'react'
import Grupon from '../components/Grupon'
// import{ getSearchResult } from '../utils/foodHelpers'
import actions from '../actions/actions'


class GruponesContainer extends Component {
  constructor(props){
    super(props)
    // const list = getSearchResult("Cheese");
  }

  handleSearchResult() {
    // const list = getSearchResult("Cheese");
    // this.setState(
    //   list 
    //   );
  }

  handleSubmit(event){
    event.preventDefault();
    console.log("submitted");
  }

  // async 
  componentWillMount(){
  // var response = await fetch(`https://notaso.com/api/v2/professors/?format=json`)
  //     .then((response) => {
  //       return response.json();
  //       })

    this.props.dispatch(actions.getTodoList());
  }

  render() {
    // console.log("list",this.state.list)

    return (
      <div>
        <Grupon todos={this.props.todos}/>
      </div>
      
    )}
    
}

GruponesContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
  }

export default GruponesContainer;