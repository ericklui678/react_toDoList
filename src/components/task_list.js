import React from 'react';
import TaskListItem from './task_list_item';

const TaskList = ({items, filter, onClick}) => {
  let taskItems = items.slice();
  switch(filter) {
    case 'completed':
      taskItems = taskItems.filter(task => task.completed);
      break;
    case 'uncompleted':
      taskItems = taskItems.filter(task => !task.completed);
      break;
  }
  taskItems = taskItems.map(task => {
    return <TaskListItem
      key={task.id}
      task={task.text}
      completed={task.completed}
      onClick={() => onClick(task.id)}/>
  });

  return (
    <ul className='list-group'>
      {taskItems}
    </ul>
  );
};

export default TaskList;
