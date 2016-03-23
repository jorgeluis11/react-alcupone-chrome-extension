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
    this.props.dispatch(actions.getGrouponList());
  }

  render() {
    return (
      <div className="row">
        {
          this.props.list.map((grupon, i) => <Grupon dispatch={this.props.dispatch} grupon={grupon} key={i} />)
        }
      </div>  
      
    )}
    
}

GruponesContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
  }

export default GruponesContainer;