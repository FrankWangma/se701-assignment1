import React, { useState } from 'react';

import submitPost, { SubmitPostError } from '../../services/createPostService';

export const createPostService = submit => CreatePost => () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [showModal, setModal] = useState(true);

  const handleSubmit = async (title, body) => {
    try {
      await submit(title, body);
      setErrorMessage(null);
      setModal(false);
    } catch (error) {
      if (!(error instanceof SubmitPostError)) {
        setErrorMessage('Could not submit post. Please try again.');
        console.error(error);
      } else {
        setErrorMessage(error.message);
      }
    }
  };

  const handleClose = () => {
    setModal(false);
  };

  return (
    <CreatePost
      showModal={showModal}
      errorMessage={errorMessage}
      onSubmit={handleSubmit}
      onClose={handleClose}
    />
  );
};

export default createPostService(submitPost);
