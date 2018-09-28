import React, { Component } from 'react';
import { connect } from 'react-redux';

import { board_read, board_remove } from './App_reducer'

class BoardRow extends Component {
    handleUpdateForm = (brdno) => {
        this.props.dispatch(board_read(brdno));
    }    
    
    render() {
        let row= this.props.row
        return(
            <tr>
                <td>{this.props.row.brdno}</td>
                <td><a onClick={() => this.handleUpdateForm(row.brdno) }>{this.props.row.brdtitle}</a></td>
                <td>{this.props.row.brdwriter}</td>
                <td>{this.props.row.brddate.toLocaleDateString('ko-KR')}</td>
                <td><a onClick={() => { this.props.dispatch(board_remove(row.brdno)) }}>X</a></td>
            </tr>
        );
    }
}

export default connect()(BoardRow)
