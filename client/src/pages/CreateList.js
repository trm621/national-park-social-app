import { Heading } from '@chakra-ui/react';
import BucketList from '../components/BucketList';
import AddTobucket from '../components/AddTobucket';
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
//bgGradient='linear(to-r, green.600, green.800, grey.800)'
  return (
    <VStack p={4}>
      <Heading
        mb='8'
        fontWeight='extrabold'
        size='2xl'
      >
        BucketList
      </Heading>
      <BucketList todos={todos} deleteTodo={deleteTodo} />
      <AddTobucket addTodo={addTodo} />
    </VStack>
  );
}

export default CreateList;