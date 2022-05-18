import React, { useState } from 'react'
 import { useDispatch,useSelector } from 'react-redux';
 import {updateFilterStatus} from '../slice/todoSlice';
import TodoModal from './TodoModal'
import Button, { SelectButton } from './Button';
import styles from '../styles/modules/app.module.scss'


function AppHeader() {
  const [modalOpen, setModalOpen] = useState(false);
  const filterStatus = useSelector((state) => state.todo.filterStatus);
  
   const dispatch = useDispatch();
   
  const updateFilter = (e) => {
    dispatch(updateFilterStatus(e.target.value));
}
 
  return (
    <div className={styles.appHeader}>
      <Button>
      <div 
      onClick={() => setModalOpen(true)}
      >
         Add Task
      </div>
      </Button>
      
      
      <SelectButton
        id="status"
        value={filterStatus}
        onChange = {updateFilter}
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