import React from 'react';

const TaskListItem = (props) => {
  return (
    <li onClick={props.onClick}>{props.task} {String(props.completed)}</li>
  );
};

export default TaskListItem;
