
import { useContext } from 'react';
import { TodosContext } from '../../store/index';

interface TasksListProps {
  block: string;
}
 
const TasksList: React.FC<TasksListProps> = ({ block })=> {
  const context = useContext(TodosContext);
  return (
    <ul>
      {
        context.items.map(item => item.position === block && (
          <li key={item.id}>
            <p> compteled {item.compteled}</p>
            <input type="checkbox" checked={item.compteled} id={item.id}/>
            <label htmlFor={item.id}>{item.title}</label>
          </li>
        ))
      }
    </ul>
  );
};

export default TasksList;