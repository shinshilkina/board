import { Link } from "react-router-dom";

const Home = () => {
  return (
    <ul>
      <li key="home">
        <Link to='/'>Home</Link>
      </li>
      <li key="todos">
        <Link to='/todos'>Todos</Link>
      </li>
    </ul>
  );
};

export default Home;