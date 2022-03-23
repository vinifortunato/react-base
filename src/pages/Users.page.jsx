import { Link } from 'react-router-dom';
import { fake } from '../devUtils';

const UsersPage = () => {
  const { users } = fake;

  const usersMap = users.map((user) => {
    const key = `user-${user.id}`;
    const path = `/profile/${user.id}`;

    return (
      <li key={key}>
        <Link to={path}>{user.name}</Link>
      </li>
    );
  });

  return (
    <div>
      <h1>Users</h1>
      <div>
        <Link to="/lobby">Lobby</Link>
      </div>
      <div>
        <ul>
          {usersMap}
        </ul>
      </div>
    </div>
  );
};

export default UsersPage;
