import styled from 'styled-components';

const Item = styled.li`
  background: #fff;
  padding: 10px;
  margin: 8px 0;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.span`
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
`;

export const TodoItem = ({ todo, onToggle, onDelete }) => (
  <Item>
    <label>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <Text completed={todo.completed}>{todo.text}</Text>
    </label>
    <button onClick={() => onDelete(todo.id)}>Видалити</button>
  </Item>
);
