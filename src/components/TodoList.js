import React from 'react';
import style from '../containers/TodoList.css';

class TodoList extends React.Component {
	constructor(props){
		super(props);
		this.passClickedItem = this.passClickedItem.bind(this);
	}
	
	passClickedItem(clickedItem){
		this.props.onClick(clickedItem);
	}

	prepareList(){
		return this.props.tasks.map((singleTask) => 
			<li className={style.todoText} key={singleTask.id} onClick={() => this.passClickedItem(singleTask.id)}>
				{singleTask.text}
			</li>
		);
	}

	render() {
		return (
			<div>
				Tasks:
				<ul>
					{this.prepareList()}
				</ul>
			</div>
		)
	}
}
export default TodoList;