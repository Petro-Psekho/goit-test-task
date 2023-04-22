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
  const { id, avatar, tweets, followers } = user.user;

  const [checked, setChecked] = useState(false);
  const [follow, setFollow] = useState(followers);

  const folowersChange = async () => {
    setChecked(!checked);

    if (!checked) {
      setFollow(prevState => prevState + 1);
      await updateUser(id, follow + 1);
    } else {
      setFollow(prevState => prevState - 1);
      await updateUser(id, follow - 1);
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
