import { useState, useEffect } from 'react';
import { getUsers } from '../../servises/usersApi';
import { Checkbox, useCheckboxStore } from '@ariakit/react';

import { UserCards, CheckboxButton } from './UserCardsItem.styled';

export const UserCardsItem = () => {
  const [users, setUsers] = useState([]);
  const checkbox = useCheckboxStore();
  const label = checkbox.useState(state => (state.value ? 'Checked' : 'Unchecked'));

  useEffect(() => {
    getUsers().then(data => {
      setUsers(data);
    });
  }, []);

  console.log(users);

  return (
    <div>
      {users.map(user => (
        <UserCards key={user.id}>
          <img src={user.avatar} alt="" />
          <p>{user.tweets} TWEETS</p>
          <p>{user.followers} FOLOWERS</p>
          <input type="checkbox" />
          <CheckboxButton as="button" store={checkbox} className="button">
            {label}
          </CheckboxButton>
        </UserCards>
      ))}
    </div>
  );
};
