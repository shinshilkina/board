import React, { useState } from 'react';
import Todo from '../types/todo';
import {Props} from '../types/todo';

type TodosContextObject = {
  items: Todo[],
  addTodo: (todo: Todo) => void
};

export const TodosContext = React.createContext<TodosContextObject>({
  items: [],
  addTodo: (todo: Todo) => ({})
});

const TodosContextProvider: React.FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onAddTodoHandler = (todo: Todo) => {
    const newTodo = todo;
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const contextValue: TodosContextObject = {
    items: todos,
    addTodo: onAddTodoHandler
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;