import React, { useRef } from "react";

const NewTask: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(inputRef?.current?.value);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <input type="text" ref={inputRef}/>
      <button>Сохранить</button>
    </form>
  );
};

export default NewTask;