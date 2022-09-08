import NewTask from '../../components/tasks/NewTask';
import TasksList from '../../components/tasks/TasksList';
import TodosContextProvider from '../../store/index';


const Todos = () => {
  return (
    <TodosContextProvider>
      <h1>Todos</h1>
      <NewTask />
      <TasksList />
    </TodosContextProvider>
  );
};

export default Todos;