import React from 'react'
import {useSelector } from 'react-redux';
import Todoitem from './Todoitem';

function AppContent() {
    const todoList = useSelector((state) => state.todo.todoList);
    const sortedTodoList = [...todoList]
    sortedTodoList.sort((a,b) => new Date(b.time) - new Date(a.time))
  return (
    <div>
    {sortedTodoList && sortedTodoList.length > 0
     ? sortedTodoList.map((todo) => <Todoitem todo={todo}/>)
     : 'no todo found'}
    </div>
  )
}

export default AppContent