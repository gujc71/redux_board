import React, { Component } from 'react';
import { connect } from 'react-redux';

import BoardForm from './App_BoardForm';
import BoardItem from './App_BoardItem';

class App extends Component {
    render() {
        const { boards} = this.props;

        return (
            <div>
                <h3>React + Redux Board 1</h3>
                <BoardForm/>
                <table border="1">
                    <tbody>
                    <tr align="center">
                        <td width="50">No.</td>
                        <td width="300">Title</td>
                        <td width="100">Name</td>
                        <td width="100">Date</td>
                    </tr>
                    {
                        boards.map(row =>
                            (<BoardItem key={row.brdno} row={row} />)
                        )
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        boards: state.boards,
        selectedBoard: state.selectedBoard
    };
}

export default connect(mapStateToProps)(App);

