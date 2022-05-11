import React from 'react';
//  import {CloseButton} from 'react-icons/md';
import styles from '../styles/modules/modal.module.scss'
import Button from './Button';


function TodoModal({ modalOpen, setModalOpen}) {
  return (
      <div>
      {modalOpen && (  
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
    <form className={styles.form}>
        <h1 className={styles.formsTitle}> Add Task </h1>
        <label htmlFor='title'>
        title
        <input type="text" id="title"/>
        </label>
        <label htmlFor='status' >
        status
        <select name='status' id ="status">
        <option value='incomplet'> incomplete</option>
        <option value='complet'> Complete</option>
        </select> 
        </label>
        <div className={styles.buttonContainer}>
        <Button type="submit" variant= "primary">
        Add task
        </Button>
        </div>
    </form>
    </div>
    </div>
     )}
      </div>
  )
}

export default TodoModal