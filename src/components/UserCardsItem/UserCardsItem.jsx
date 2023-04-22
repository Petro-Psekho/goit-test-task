import { useState, useEffect } from 'react';
import { updateUser } from '../../servises/usersApi';

import image from '../../img/picture.png';
import logo from '../../img/Logo.png';

import {
  CardsItem,
  CheckboxContainer,
  Logo,
  BgImage,
  Rectangle,
  AvatarWrap,
  Avatar,
  Tweets,
  Followers,
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
      <Logo src={logo} alt="goit logo" />
      <BgImage src={image} alt="background image" />
      <Rectangle />
      <AvatarWrap />
      <Avatar src={avatar} alt="user avatar" />

      <Tweets>{tweets} TWEETS</Tweets>
      <Followers>{follow} FOLOWERS</Followers>
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
