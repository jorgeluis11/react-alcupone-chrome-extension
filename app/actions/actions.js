import fetch from 'isomorphic-fetch'
import ReduxThunk from 'redux-thunk'

let actions = {
		// addTodo: function(text){
		// 	return {
		// 		type:"ADD_TODO",
		// 		text:text
		// 	}
		// },
        toggleGroupon: function(id){
            return {
                type:"Toggle_Groupon",
                id
            }
        },
		getTodoList: function() {
    //The thunk is also passed the state as a second parameter, but it's not
    //needed very frequently.
        // return async function(dispatch) {
        //     var response = await fetch(`http://gruponaso.herokuapp.com/?start=0&index=0&list=gustazos`)
        //     .then((response) => {
        //         return response.json();
        //     });
            
        //     dispatch({
        //             type: "GET_LIST",
        //             result: response.results,
        //       })
        // }
    },

 //    searchProfesor: function(start,index,list) {
 //    //The thunk is also passed the state as a second parameter, but it's not
 //    //needed very frequently.
	//     return async function(dispatch) {
 //            const response = await fetch(`http://gruponaso.herokuapp.com/?${start}=0&${index}=0&${list.join(',')}=gustazos`)
	//       	.then((response) => {
 //            	return response.json();
	//         });
	    	
	// 		dispatch({
	//                 type: "GET_LIST",
	//                 result: response.results,
	//           })
	//     }
	// }
}



// let getData = function() {
//     //The thunk is also passed the state as a second parameter, but it's not
//     //needed very frequently.
//     return async function(dispatch) {
//         //These actions use the meta property to denote what they are doing.
//         //Another solution is to use separate action types.
//         // dispatch({
//         //     type: "GET_LIST",
//         //     meta: 'request',
//         // });
//         //Normally, you'd have an ajax call, or some other asynchronous action
//         //beside a setTimeout.
//         var response = await fetch(`https://notaso.com/api/v2/professors/?format=json`)
//       	.then((response) => {
//       		  dispatch({
//                 type: "GET_LIST",
//                 todo: response.json().results(),
//             });
//         })
      
//     }
// };



export default actions