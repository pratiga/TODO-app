import React, { useState} from 'react';
import toast from 'react-hot-toast';
import todo, { addTodo, updateTodo } from '../slice/todoSlice';
//  import {CloseButton} from 'react-icons/md';
import styles from '../styles/modules/modal.module.scss'
import Button from './Button'; 
import { useDispatch } from 'react-redux';
import { v4 as uuid} from 'uuid';



function TodoModal({ type, modalOpen, setModalOpen}) {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('incomplete');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === ''){
      toast.error('please enter a title');
      return
    }
    if(title && status) {
      if (type === 'add'){
      dispatch(
        addTodo({
        id:uuid(),
        title,
        status,
        time: new Date().toLocaleDateString(),
      })
      );
      toast.success('Task Added Sucessfully');
      setModalOpen(false);
    }
      if( type === 'update') {
        if (todo.title !== title || todo.status !== status){
          dispatch(
            updateTodo({
              ...todo,
              title,
              status,
            })
          )
        } else {
          toast.error('No Change Made');
        }
      }
    } else {
      toast.error("Title shouldn't be empty");
    }
  };
  return (
      modalOpen && (  
    <div className={styles.wrapper}>
    <div className={styles.container}>
    <div 
    className={styles.closeButton}
    onClick={() => setModalOpen(false)}
    onKeyDown={() => setModalOpen(false)}
    tabIndex={0}
    role="button"
    >
     {/* <CloseButton />  */}
    </div>
    <form className={styles.form} onSubmit={(e) => 
        handleSubmit(e) }>
        <h1 className={styles.formTitle}> 
        {type === 'add' ? 'Add' : 'Update'} TODO
         </h1>
        <label htmlFor='title'>
        title
        <input
         type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label htmlFor='type' >
        Status
        <select
         name='status'
          id ="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          >
        <option value='incomplet'> incomplete</option>
        <option value='complet'> Complete</option>
        </select> 
        </label>
        <div className={styles.buttonContainer}>
        <Button 
         type="submit"
         variant= "primary">
        {type === 'add'? 'AddTask': 'Update Task'}
        </Button>
        <Button
        type="button"
        variant='secondary'
        onClick={() => setModalOpen(false)}
        onKeyDown={() => setModalOpen(false)}
        >
        Cancle
        </Button>
        </div>
    </form>
    </div>
    </div>
     )
      
  )
}


export default TodoModal