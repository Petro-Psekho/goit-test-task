import { useState, useEffect } from 'react';
import { getUsers } from '../../servises/usersApi';

import { UserCardsItem } from '../UserCardsItem/UserCardsItem';

import { Container } from './UserCards.styled';

export const UserCards = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(data => {
      setUsers(data);
    });
  }, []);

  return (
    <Container>
      {users.map(user => (
        <UserCardsItem key={user.id} user={user} />
      ))}
    </Container>
  );
};
