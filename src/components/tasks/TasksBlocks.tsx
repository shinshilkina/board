import TasksList from './TasksList';
import NewTask from './NewTask';
import { POSITIONS } from '../../tools/constants';


const TasksBlocks: React.FC = ()=> {
  return (
    <div>{ POSITIONS.map((block: string) => (
      <div key={block}>
        <NewTask type={block}/>
        <TasksList block={block} />
    </div>
    ))}</div>
  );
};

export default TasksBlocks;