/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import TodoItem from './TodoItem'

const Todos = ({todos}) => {
	return (
		<div>
			{todos.map((todo) => {
				return (
					<TodoItem
						key={todo.id}
						todo={todo}
					/>
				)
			})}
		</div>
	)
}

export default Todos
