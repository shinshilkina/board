import TasksBlocks from '../../components/tasks/TasksBlocks';
import TodosContextProvider from '../../store/index';


const Todos = () => {
  return (
    <TodosContextProvider>
      <h1>Todos</h1>
      <TasksBlocks />
    </TodosContextProvider>
  );
};

export default Todos;