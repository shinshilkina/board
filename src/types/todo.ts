class Todo {
  id: string;
  text: string;

  constructor(todoString: string) {
    this.text = todoString;
    this.id = new Date().toISOString();
  }
}

export default Todo;