import React, {Component} from 'react'
import {connect} from 'react-redux'
import TogglesContainer from '../containers/TogglesContainer'
import GruponesContainer from '../containers/GruponesContainer'


// var GetCityContainer = require('./GetCityContainer');

// const styles = {
//   container: {
//     width: '100%',
//     height: '92%'
//   },
//   header :{
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     background: 'rgba(252, 90, 44, 0.89)',
//     color: '#fff',
//     padding: 5,
//   }
// }



class Main extends Component {
  constructor(props){
    super(props);
    // this.state = {
    //   name:"jorge"
    // }
  }
  render() {
    return (
       <div className="jumbotron">
       <h1 className="center">Groupones de PR!</h1>
        <TogglesContainer dispatch={this.props.dispatch} handleSubmit={this.handleSubmit}/>
        <GruponesContainer dispatch={this.props.dispatch} todos={this.props.todos}/>
      </div>
    );
  }
}


// Main.contextTypes = {
//     router: React.PropTypes.object.isRequired
//   }

//   Main.setDefaultProps = {
//       name:"jorge"

//   }

function mapStateToProps(state){
  return state;
}

module.exports = connect(mapStateToProps)(Main);

export default Main;