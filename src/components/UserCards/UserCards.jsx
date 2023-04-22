import { useState, useEffect } from 'react';
import { getUsers } from '../../servises/usersApi';

import { UserCardsItem } from '../UserCardsItem/UserCardsItem';

export const UserCards = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(data => {
      setUsers(data);
    });
  }, []);

  return (
    <div>
      <ul>
        {users.map(user => (
          <UserCardsItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};
