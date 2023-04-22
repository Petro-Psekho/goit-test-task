import { useState, useEffect } from 'react';
import { updateUser } from '../../servises/usersApi';

import image from '../../img/picture.png';

import {
  CardsItem,
  CheckboxContainer,
  CheckboxInput,
  CheckboxInputLabelOff,
  CheckboxInputLabelOn,
} from './UserCardsItem.styled';

export const UserCardsItem = user => {
  const { id, avatar, tweets, followers, check } = user.user;

  const [checked, setChecked] = useState(check);
  const [follow, setFollow] = useState(followers);

  useEffect(() => {}, []);

  const folowersChange = async () => {
    setChecked(!checked);

    console.log(checked, id);

    if (!checked) {
      setFollow(prevState => prevState + 1);
      // setChecked(prevState => prevState, true);

      await updateUser(id, follow + 1, true);
    } else {
      setFollow(prevState => prevState - 1);
      await updateUser(id, follow - 1, false);
    }
  };

  return (
    <CardsItem key={id}>
      <img src={image} alt="" />

      <img src={avatar} alt="" />
      <p>{tweets} TWEETS</p>
      <p>{follow} FOLOWERS</p>
      <CheckboxContainer>
        <CheckboxInput type="checkbox" id={id} checked={checked} onChange={folowersChange} />
        {checked ? (
          <CheckboxInputLabelOn htmlFor={id}>Following</CheckboxInputLabelOn>
        ) : (
          <CheckboxInputLabelOff htmlFor={id}>Follow</CheckboxInputLabelOff>
        )}
      </CheckboxContainer>
    </CardsItem>
  );
};
