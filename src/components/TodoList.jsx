import React from 'react';
import { List, ListItem, Button, Text, Checkbox } from '../styles';

const TodoList = ({ todos, onDelete, onToggleCompleted }) => (
  <List>
    {todos.map(({ id, text, completed }) => (
      <ListItem key={id}>
        <Checkbox
          type="checkbox"
          checked={completed}
          onChange={() => onToggleCompleted(id)}
        />
        <Text completed={completed}>{text}</Text>
        <Button onClick={() => onDelete(id)}>Видалити</Button>
      </ListItem>
    ))}
  </List>
);

export default TodoList;
