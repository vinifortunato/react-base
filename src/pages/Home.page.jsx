import { Link } from 'react-router-dom';

const HomePage = () => (
  <div>
    <h1>Home</h1>
    <div>
      <Link to="/login">Login</Link>
    </div>
    <div>
      <Link to="/register">Cadastre-se</Link>
    </div>
  </div>
);

export default HomePage;
