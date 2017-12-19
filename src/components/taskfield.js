import React from 'react';

const TaskField = (props) => {
  return (
    <div>
       <form onSubmit={props.onSubmit}>
        <input
          onChange={props.taskChange}
          value={props.text}
          className='form-control form-control-lg'
          type='text'
          placeholder='New tasks to do...'
        />
      </form>
    </div>
  );
};

export default TaskField;
