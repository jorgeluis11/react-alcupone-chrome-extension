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
     console.log
    var image = "../image/noImage";

    if (this.props.grupon && this.props.grupon.image) 
      image = this.props.grupon.image;

    return (
      <div className="groupon-col">
        <div className="groupon-image-cut">
          <img className="groupon-image" src={image}></img>
        </div>
        {this.props.grupon.from}
        {this.props.grupon.price}
        {this.props.grupon.title}
      </div>
      )
  } 
}

export default Grupon;