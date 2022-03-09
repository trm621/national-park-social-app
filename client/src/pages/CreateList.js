
import BucketList from '../components/BucketList';
import AddTobucket from '../components/AddTobucket';
import UploadImage from '../components/UploadImage'
import { VStack } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

function CreateList() {
  
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) || []
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }
  return (
    <VStack>
      <BucketList todos={todos} deleteTodo={deleteTodo} />
      <AddTobucket addTodo={addTodo} />
      <UploadImage />
    </VStack>
  );
}

export default CreateList;