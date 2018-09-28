import { createAction, handleActions } from 'redux-actions';

// action type
const BOARD_SAVE = 'SAVE';
const BOARD_REMOVE = 'REMOVE';
const BOARD_READ = 'READ';
const BOARD_LIST = 'LIST';

export const board_save = createAction(BOARD_SAVE);
export const board_remove = createAction(BOARD_REMOVE, brdno => brdno);
export const board_read = createAction(BOARD_READ);
export const board_list = createAction(BOARD_LIST);

let    maxNo = 3;

const initialState = {
    boards: [
            {
                brdno: 1,
                brdwriter: 'Lee SunSin',
                brdtitle: 'If you intend to live then you die',
                brddate: new Date()
            },
            {
                brdno: 2,
                brdwriter: 'So SiNo',
                brdtitle: 'Founder for two countries',
                brddate: new Date()
            }    
    ],
    selectedBoard: {}
};

export default handleActions({
    [BOARD_SAVE]: (state, { payload: data }) => {
        let boards = state.boards;
        if (!data.brdno) {    // new : Insert
            data.brdno = maxNo++;
            return {boards: boards.concat({brddate: new Date(), ...data }), selectedBoard: {} };
             
        } else {                                                        // Update
            return {boards: boards.map(row => data.brdno === row.brdno ? {...data }: row), selectedBoard: {} };
        }    
    },
    [BOARD_REMOVE]: (state, { payload: brdno }) => {
        let boards = state.boards;
        return {boards: boards.filter(row => row.brdno !== brdno), selectedBoard: {} };
    },
    [BOARD_READ]: (state, { payload: brdno }) => {
        let boards = state.boards;
        return {
            boards: boards,
            selectedBoard: boards.find(row => row.brdno === brdno)
        };
    }
}, initialState);
