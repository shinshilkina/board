import React, { useContext, useRef } from "react";
import { TodosContext } from '../../store/index';

interface NewTaskProps {
  type: string;
}

const NewTask: React.FC<NewTaskProps> = ({ type }) => {
  const context = useContext(TodosContext);

  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const newItem = {
      id: new Date().toISOString(),
      created_at: new Date().toISOString(),
      title: inputRef?.current?.value || '',
      position: type
    };

    context.addTodo(newItem);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <input type="text" ref={inputRef}/>
      <button>Сохранить</button>
    </form>
  );
};

export default NewTask;