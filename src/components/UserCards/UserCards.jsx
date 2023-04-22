import { useState, useEffect } from 'react';
import { getUsers } from '../../servises/usersApi';
import { Loader } from '../../Loader/Loader';
import { UserCardsItem } from '../UserCardsItem/UserCardsItem';

import { Container } from './UserCards.styled';

export const UserCards = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(data => {
      setUsers(data);
    });
  }, []);

  return !users.length ? (
    <Loader />
  ) : (
    <Container>
      {users.map(user => (
        <UserCardsItem key={user.id} user={user} />
      ))}
    </Container>
  );
};
