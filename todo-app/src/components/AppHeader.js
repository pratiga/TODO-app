import React, { useState } from 'react'
import TodoModal from './TodoModal'
import Button, { SelectButton } from './Button';


function AppHeader() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
    <h1>hello from header</h1>
    <Button  variant="primary" onClick={() =>
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