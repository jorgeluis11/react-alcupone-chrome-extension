function getId(state){
	return state.todos.reduce((maxId, todo) => {
		return Math.max(todo.id, maxId);
	}, -1) + 1
}

export default function reducer(state, action) {
	switch(action.type){
		case "GET_LIST":
			return Object.assign({}, state, ...state.list, {
				list:[...action.result]
				});
		case "Toggle_Groupon":
			state.grouponList[action.id].active = !state.grouponList[action.id].active;
			return Object.assign({}, state, ...state.grouponList, {
				grouponList:[...state.grouponList]
				});
		default:
			return state;
	}

}