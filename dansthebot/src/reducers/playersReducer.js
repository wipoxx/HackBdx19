import Actions from "../constants/Actions";
const initialState = {
	players: [],
	currentPlayer: 0,
};

export default function playersInfo(state = initialState, action) {
	var nextState = { ...state };
	switch (action.type) {
		case Actions.SAVE_PLAYERS:
			return { ...state, players: action.value };
		case Actions.CHANGE_CURRENT_PLAYER:
			return { ...state, currentPlayer: action.value };
		case Actions.REDUCE_USER_LIFE:
			if (nextState.players[nextState.currentPlayer].life >= 1) {
				state.players[state.currentPlayer].life--;
			} else {
				//todo perdu
			}
			return nextState || state;
		case Actions.RAISE_USER_LIFE:
			if (nextState.players[nextState.currentPlayer].life <= 3)
				nextState.players[nextState.currentPlayer].life++;
			return nextState || state;
		case Actions.GAIN_BATTERY:
			if (nextState.players[nextState.currentPlayer].battery < 3) {
				state.players[state.currentPlayer].battery++;
			} else {
				//todo gagner
			}
			return nextState || state;
		case Actions.SAVE_USER_ENERGY:
			state.players[state.currentPlayer].battery = action.value;
			return nextState || state;
		default:
			return state;
	}
}
