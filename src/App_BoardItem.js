import React, { Component } from 'react';
import { connect } from 'react-redux';

import { board_read, board_remove } from './App_reducer'

class BoardRow extends Component {
	handleUpdateForm = (id) => {
		this.props.dispatch(board_read(id));
	}	
	
    render() {
		let row= this.props.row
        return(
            <tr>
				<td>{this.props.row.id}</td>
				<td><a onClick={() => this.handleUpdateForm(row.id) }>{this.props.row.title}</a></td>
				<td>{this.props.row.name}</td>
				<td>{this.props.row.date.toLocaleDateString('ko-KR')}</td>
				<td><a onClick={() => { this.props.dispatch(board_remove(row.id)) }}>X</a></td>
			</tr>
        );
    }
}

export default connect()(BoardRow)
