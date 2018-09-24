import { createAction, handleActions } from 'redux-actions';

// action type
const BOARD_SAVE = 'SAVE';
const BOARD_REMOVE = 'REMOVE';
const BOARD_READ = 'READ';
const BOARD_LIST = 'LIST';

export const board_save = createAction(BOARD_SAVE);
export const board_remove = createAction(BOARD_REMOVE, id => id);
export const board_read = createAction(BOARD_READ);
export const board_list = createAction(BOARD_LIST);

let	maxNo = 3;

const initialState = {
	boards: [
			{
				id: 1,
				name: 'Lee SunSin',
				title: 'If you intend to live then you die',
				date: new Date()
			},
			{
				id: 2,
				name: 'So SiNo',
				title: 'Founder for two countries',
				date: new Date()
			}	
	],
	selectedBoard: {}
};

export default handleActions({
	[BOARD_SAVE]: (state, { payload: data }) => {
		let boards = state.boards;
		if (data.id ===null || data.id==='' || data.id===undefined) {	// new : Insert
			data.id = maxNo++;
			return {boards: boards.concat({date: new Date(), ...data }), selectedBoard: {} };
			 
		} else {														// Update
			return {boards: boards.map(row => data.id === row.id ? {...data }: row), selectedBoard: {} };
		}	
	},
	[BOARD_REMOVE]: (state, { payload: id }) => {
		let boards = state.boards;
		return {boards: boards.filter(row => row.id !== id), selectedBoard: {} };
	},
	[BOARD_READ]: (state, { payload: id }) => {
		let boards = state.boards;
		return {
			boards: boards,
			selectedBoard: boards.find(row => row.id === id)
		};
	}
}, initialState);
