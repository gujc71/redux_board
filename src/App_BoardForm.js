import React, { Component } from 'react';
import { connect } from 'react-redux';

import { board_save } from './App_reducer'

class BoardForm extends Component {
	
	handleSubmit = (e) => {
		e.preventDefault();
		
		let data = {
			title: this.titleInput.value,
			name: this.nameInput.value
		}
		if (this.props.selectedBoard.id) {
			data.id = this.props.selectedBoard.id
			data.date = this.props.selectedBoard.date
		}

		this.props.dispatch(board_save(data));
	}
	
	shouldComponentUpdate(nextProps, nextState) {
		let  selectedBoard = nextProps.selectedBoard;
		if (!selectedBoard.id) {
			this.titleInput.value = "";
			this.nameInput.value = "";		
			return true;
		}
		
		this.titleInput.value = selectedBoard.title;
		this.nameInput.value = selectedBoard.name;		
		return true;
	}

	render() {
		return (
		
			<form onSubmit={this.handleSubmit}>
				<input placeholder="title" name="title" ref={node => this.titleInput = node}/>
				<input placeholder="name" name="name" ref={node => this.nameInput = node}/>
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
