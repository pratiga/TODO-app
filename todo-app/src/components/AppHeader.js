import React, { useState } from 'react'
// import { useDispatch } from 'react-redux';
import TodoModal from './TodoModal'
import Button, { SelectButton } from './Button';
import styles from '../styles/modules/app.module.scss'


function AppHeader() {
  const [modalOpen, setModalOpen] = useState(false);
  // const dispatch = useDispatch()
  const handleUpdate = () => {
    setModalOpen(true)
}
 
  return (
    <div className={styles.appHeader}>
      <Button>
      <div 
      onClick={() => handleUpdate()}
      onKeyDown={() => handleUpdate()}
      
      >
         Add Task
      </div>
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