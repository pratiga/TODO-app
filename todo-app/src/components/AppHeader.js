import React, { useState } from 'react'
// import { useDispatch } from 'react-redux';
import TodoModal from './TodoModal'
import Button, { SelectButton } from './Button';
import styles from '../styles/modules/app.module.scss'


function AppHeader() {
  const [modalOpen, setModalOpen] = useState(true);
  // const dispatch = useDispatch()
 
  return (
    <div className={styles.appHeader}>
      <Button variant="primary" onClick={() => setModalOpen(true)}>
        Add Task
      </Button>
      <SelectButton
        id="status"
        //onChange={(e) => updateFilter(e)}
       // value={filterStatus}
      >
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Completed</option>
      </SelectButton>
      <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

export default AppHeader;