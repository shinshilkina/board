
import { useContext } from 'react';
import { TodosContext } from '../../store/index';

const TasksList: React.FC = () => {
  const context = useContext(TodosContext);

  return (
    <ul>
      {
        context.items.map(item => (
          <li key={item.id}>
            <i>{item.id}</i>
            <p>{item.title}</p>
          </li>
        ))
      }
    </ul>
  );
};

export default TasksList;