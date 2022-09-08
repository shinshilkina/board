import React, { useContext, useRef } from "react";
import { TodosContext } from '../../store/index';
import { Props } from '../../types/todo';

const NewTask: React.FC<Props> = ({ children }) => {
  const context = useContext(TodosContext);

  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    context.addTodo(inputRef?.current?.value || '');
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <input type="text" ref={inputRef}/>
      <button>Сохранить</button>
    </form>
  );
};

export default NewTask;