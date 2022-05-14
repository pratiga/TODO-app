import React from 'react'
import styles from '../styles/modules/todoitem.module.scss'
import { getClasses} from '../utils/getClasses';
import {MdDelete,MdEdit} from 'react-icons/md';
import { useDispatch } from 'react-redux';
//import { dispatch } from 'react-hot-toast/dist/core/store';
import { deleteTodo } from '../slice/todoSlice';
import toast from 'react-hot-toast';

function Todoitem({ todo }) {
  
  const dispatch = useDispatch();
  const handleUpdate = () => {
      console.log('updating');
  }
    const handleDelete = () => {
      dispatch(deleteTodo(todo.id));
      toast.success('Todo deleted successfully');
    };
  
  return (
    <div className='styles.item'>
    <div className={styles.todoDetails}>
    []
    <div className={styles.texts}>
    <p
    className={getClasses([
      styles.todoText,
      todo.status === 'complete' && styles
      ['todoText--completed'],
    ])}
    >
      {todo.title}
    </p>
    <p className={styles.time}>
      {FormData(new Date(todo.time), 'p, MM/dd/yyyy')}
    </p>
    </div>
    </div>
    
    <div className={styles.todoActions}>
      <div 
      className={styles.icon}
      onClick={handleDelete}
      onKeyDown={handleDelete}
      role="button"
      tabIndex={0}
      >
      <MdDelete />
      </div>
      <div 
      className={styles.icons}
      onClick={handleUpdate}
      onKeyDown={handleUpdate}
      role="button"
      tabIndex={0}
      >
        <MdEdit />
      </div>
    </div>
    
    </div>
  )
}

export default Todoitem