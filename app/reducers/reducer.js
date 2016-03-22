

function getId(state){
	return state.todos.reduce((maxId, todo) => {
		return Math.max(todo.id, maxId);
	}, -1) + 1
}



export default function reducer(state, action) {
	switch(action.type){
		case "ADD_TODO":
			return Object.assign({}, state, ...state.todos, {
				todos:[{
					text: action.text,
					completed: false,
					id: getId(state)
				}, ...state.todos]
			});
		case "GET_LIST":
			return Object.assign({}, state, ...state.todos, {
				todos:[...action.result]
				});
		default:
			return state;
	}

}