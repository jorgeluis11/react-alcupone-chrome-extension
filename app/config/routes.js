import React, {Component} from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import Main from '../containers/Main'
// import ForecastContainer from' ../containers/ForecastContainer'
// import DetailContainer from '../containers/DetailContainer'
import configureStore from '../store/store'
import { Provider } from 'react-redux'

let initialState =  {
	todos:[]
}

let store = configureStore(initialState)

var routes = (
	<Provider store={store}>
	  <Router history={hashHistory}>
	    <Route path='/' >
	    	<IndexRoute component={Main} />
	    </Route>
	  </Router>
  	</Provider>
);

	    	// <Route path='jorge/' component={HomeContainer} />

//   // <Route path='forecast/:city' component={ForecastContainer} />
    //   // <Route path='detail/:city' component={DetailContainer} />
// class Contacts extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>aaa</div>
//     );
//   }
// }

export default routes;