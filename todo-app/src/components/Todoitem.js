import React from 'react'
import styles from '../styles/modules/todoItems.module.scss'

function Todoitem({ todo }) {
  return (
    <div className='styles.item'>
    <div className={styles.todoDEtails}>
    []
    <div className={styles.texts}>
    <p>{ todo.title}</p>
    </div>
    </div>
    
    </div>
  )
}

export default Todoitem