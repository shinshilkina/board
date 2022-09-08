class Todo {
  id: string;
  text: string;

  constructor(todoString: string) {
    this.text = todoString;
    this.id = new Date().toISOString();
  }
}


export type Props = {
  children?: React.ReactNode
};

export default Todo;