import styled from 'styled-components';

export const AppContainer = styled.div`
  max-width: 500px;
  margin: 40px auto;
  padding: 20px;
  border-radius: 10px;
  background: #f2f2f2;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Text = styled.span`
  flex-grow: 1;
  margin-left: 10px;
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
`;

export const Button = styled.button`
  background-color: #ff4d4f;
  color: white;
  border: none;
  padding: 6px 10px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #d9363e;
  }
`;

export const Input = styled.input`
  padding: 8px;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

export const Checkbox = styled.input`
  transform: scale(1.2);
`;

export const Form = styled.form`
  margin-bottom: 20px;
`;

export const InfoContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;
