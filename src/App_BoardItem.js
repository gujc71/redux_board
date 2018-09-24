import React from 'react';
import { connect } from 'react-redux';

import { board_read, board_remove } from './App_reducer'

const BoardRow = ({ row, board_read, board_remove}) => (
	<tr>
		<td>{row.id}</td>
		<td><a onClick={() => { board_read(row.id) } }>{row.title}</a></td>
		<td>{row.name}</td>
		<td>{row.date.toLocaleDateString('ko-KR')}</td>
		<td><a onClick={() => { board_remove(row.id) }}>X</a></td>
	</tr>
);

const mapDispatchToProps = dispatch => ({
  board_read: id => dispatch(board_read(id)),
  board_remove: id => dispatch(board_remove(id))
})

export default connect(null, mapDispatchToProps)(BoardRow)
