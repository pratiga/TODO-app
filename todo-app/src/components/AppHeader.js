import React, { useState } from 'react'
import TodoModal from './TodoModal'
import Button, { SelectButton } from './Button';
import styles from '../styles/modules/app.module.scss'


function AppHeader() {
  const [modalOpen, setModalOpen] = useState(true);
  return (
    <div className={styles.appHeader}>
    
    <Button type='submit' variant="primary" onClick={() =>
     setModalOpen(true)}>
    Add Task
    </Button>
    <SelectButton id="status">
      <option value="all">All</option>
      <option value="incomplete"> incomplete</option>
      <option value="complete">complete</option>
    </SelectButton>
    <TodoModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
   
    </div>
  )
}

export default AppHeader