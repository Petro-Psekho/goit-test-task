import { useState, useEffect } from 'react';

import image from '../../img/picture.png';

import {
  CardsItem,
  CheckboxContainer,
  CheckboxInput,
  CheckboxInputLabelOff,
  CheckboxInputLabelOn,
} from './UserCardsItem.styled';

export const UserCardsItem = user => {
  const [checked, setChecked] = useState(false);

  const { id, avatar, tweets, followers } = user.user;

  const folowersChange = () => {
    setChecked(!checked);

    if (checked) {
      return console.log('Not');
    }
    console.log('Yes');
  };

  return (
    <CardsItem key={id}>
      <img src={image} alt="" />

      <img src={avatar} alt="" />
      <p>{tweets} TWEETS</p>
      <p>{followers} FOLOWERS</p>
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
