import React from 'react';
import { connect } from 'react-redux';

import { board_read, board_remove } from './App_reducer'

const BoardItem = ({ row, board_read, board_remove}) => (
    <tr>
        <td>{row.brdno}</td>
        <td><a onClick={() => { board_read(row.brdno) } }>{row.brdtitle}</a></td>
        <td>{row.brdwriter}</td>
        <td>{row.brddate.toLocaleDateString('ko-KR')}</td>
        <td><a onClick={() => { board_remove(row.brdno) }}>X</a></td>
    </tr>
);

const mapDispatchToProps = dispatch => ({
  board_read: brdno => dispatch(board_read(brdno)),
  board_remove: brdno => dispatch(board_remove(brdno))
})

export default connect(null, mapDispatchToProps)(BoardItem)
