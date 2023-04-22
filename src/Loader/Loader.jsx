import React from 'react';
import { Comment } from 'react-loader-spinner';

import { Container } from './Loader.styled';

export const Loader = () => {
  return (
    <Container>
      <Comment
        visible={true}
        height="100"
        width="100"
        ariaLabel="comment-loading"
        wrapperStyle={{}}
        wrapperClass="comment-wrapper"
        color="#fff"
        backgroundColor="#471CA9"
      />
    </Container>
  );
};
