import React from 'react';
import style from '../containers/TodoList.css';

class TodoList extends React.Component {
	constructor(props){
		super(props);
		this.passClickedItem = this.passClickedItem.bind(this);
	}
	
	passClickedItem(clickedItem){
		this.props.onClick(clickedItem);
		console.log('passClickedItem - clickedItem: ', clickedItem)
	}
	
	render() {
		const singleTaskNames = this.props.tasks.map(singleTask => {
			console.log ('render: singleTask in map function: ', singleTask)
			return (
			<li className={style.todoText} key={singleTask.id} onClick={() => this.passClickedItem(singleTask.id)}>
				{singleTask.text}
			</li>
		)});
		console.log('render: singleTaskNames: ', singleTaskNames)
		return (
			<div>
				Tasks:
			<ul>
					{singleTaskNames}
				</ul>
			</div>
		)
	}
}
export default TodoList;