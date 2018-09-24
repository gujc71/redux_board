// action type
const BOARD_SAVE = 'SAVE';
const BOARD_REMOVE = 'REMOVE';
const BOARD_READ = 'ONE';
const BOARD_LIST = 'LIST';

export const board_save = (data) => ({ 
								type: BOARD_SAVE,
								data
							});
							
export const board_remove = (id) => ({ 
								type: BOARD_REMOVE,
								id: id
							});

export const board_read = (id) => ({ 
								type: BOARD_READ,
								id: id
							});
							
export const board_list = () => ({ type: BOARD_LIST });

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

export default function board_reducer(state = initialState, action) {
	let boards = state.boards;
	switch(action.type) {
		case BOARD_SAVE:
			let data = action.data;
			if (data.id ===null || data.id==='' || data.id===undefined) {	// new : Insert
				data.id = maxNo++;
				return {boards: boards.concat({date: new Date(), ...data }), selectedBoard: {} };
				 
			} else {														// Update
				return {boards: boards.map(row => data.id === row.id ? {...data }: row), selectedBoard: {} };
			}		
		case BOARD_REMOVE:
			 return {boards: boards.filter(row => row.id !== action.id), selectedBoard: {} };
		case BOARD_READ:
			 return {
				 boards: boards,
				 selectedBoard: boards.find(row => row.id === action.id)
			};
		default:
			return state;
	}
}