import React, { Component, PropTypes } from 'react'
// var GetCityContainer = require('../containers/GetCityContainer');

// const styles = {
//   container: {
//     backgroundSize: 'cover',
//     backgroundImage: "url('app/images/pattern.svg')",
//     display: 'block',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100%',
//     width: '100%'
//   },
//   header: {
//     fontSize: 45,
//     color: 'black',
//     fontWeight: 100,
//   },
// }

class Grupon extends Component {
  constructor(props){
    super(props)

    
  }
  


  render(){
    return (
      <div className="row">
        {

          this.props.todos.map((todo) => {
            return <div className="profe-container col-xs-6 col-md-4" key={todo.id}>

              <h2>{todo.first_name}</h2>

            </div>
          })

        }
        
      </div>
      )
  } 
}

export default Grupon;