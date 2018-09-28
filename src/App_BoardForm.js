import React, { Component } from 'react';
import { connect } from 'react-redux';

import { board_save } from './App_reducer'

class BoardForm extends Component {
    
    handleSubmit = (e) => {
        e.preventDefault();
        
        let data = {
            brdtitle: this.brdtitle.value,
            brdwriter: this.brdwriter.value
        }
        if (this.props.selectedBoard.brdno) {
            data.brdno = this.props.selectedBoard.brdno
            data.brddate = this.props.selectedBoard.brddate
        }

        this.props.dispatch(board_save(data));
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        let  selectedBoard = nextProps.selectedBoard;
        if (!selectedBoard.brdno) {
            this.brdtitle.value = "";
            this.brdwriter.value = "";        
            return true;
        }
        
        this.brdtitle.value = selectedBoard.brdtitle;
        this.brdwriter.value = selectedBoard.brdwriter;        
        return true;
    }

    render() {
        return (
        
            <form onSubmit={this.handleSubmit}>
                <input placeholder="title" name="brdtitle" ref={node => this.brdtitle = node}/>
                <input placeholder="name" name="brdwriter" ref={node => this.brdwriter = node}/>
                <button type="submit">Save</button>
            </form>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        selectedBoard: state.selectedBoard
    };
}
export default connect(mapStateToProps)(BoardForm);
