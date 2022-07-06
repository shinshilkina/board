import React, { useState } from 'react';
import Todo from '../types/todo';

type TodosContextObject = {
  items: Todo[],
  addTodo: (text: string) => void
};

export const TodosContext = React.createContext<TodosContextObject>({
  items: [],
  addTodo: (text: string) => ({})
});

type Props = {
  children?: React.ReactNode
};

const TodosContextProvider: React.FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onAddTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
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