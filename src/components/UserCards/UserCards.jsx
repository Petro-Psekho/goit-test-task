import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { HiChevronDoubleLeft } from 'react-icons/hi';
import { getUsers } from '../../servises/usersApi';
import { Loader } from '../../Loader/Loader';
import { UserCardsItem } from '../UserCardsItem/UserCardsItem';

import { ListContainer, UserCartsList, LoadMoreButton, GoBackButton } from './UserCards.styled';

export const UserCards = () => {
  const [users, setUsers] = useState([]);
  const [loadMore, setLoadMore] = useState(false);
  const [page, setPage] = useState(2);

  const location = useLocation();

  useEffect(() => {
    getUsers().then(data => {
      setUsers(data);
    });
  }, []);

  const handleLoadMore = async () => {
    setLoadMore(true);

    setPage(prevState => prevState + 1);
    const data = await getUsers(page);
    setUsers(prevState => [...prevState, ...data]);

    setLoadMore(false);
  };

  return !users.length ? (
    <Loader />
  ) : (
    <ListContainer>
      <GoBackButton to={location.state?.from ?? '/'}>
        <span>
          <HiChevronDoubleLeft size="28" color="#5736a3  " />
        </span>
      </GoBackButton>
      <div>
        <UserCartsList>
          {users.map(user => (
            <UserCardsItem key={user.id} user={user} />
          ))}
        </UserCartsList>
      </div>
      {loadMore && <Loader />}
      <LoadMoreButton
        style={{ display: users.length > 11 ? 'none' : 'block' }}
        onClick={handleLoadMore}
        type="button"
      >
        {loadMore ? 'Loading...' : 'LOAD MORE'}
      </LoadMoreButton>
    </ListContainer>
  );
};
