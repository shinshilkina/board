// class Todo {
//   id: string;
//   title: string;
//   created_at: string;
//   description: string;
//   position: string;
//   is_deleted: boolean;
//   is_done: boolean;


//   constructor(task: {
//     title: string, description: string, position: string, is_deleted: boolean, is_done: boolean 
//   }) {
//     this.id = new Date().toISOString();
//     this.created_at = new Date().toISOString();
//     this.title = task.title;
//   }
// }

export type Todo = {
  id: string;
  title: string;
  created_at: string;
  description?: string;
  position: string; // today\notes\waiting
  deleted?: boolean;
  compteled?: boolean;
};

export type Props = {
  children?: React.ReactNode
};

export default Todo;