import React from 'react';

const useToggle = (): [showModal: boolean, onToggle: () => void] => {
  const [showModal, setShowModal] = React.useState<boolean>(false);

  const onToggle = React.useCallback(() => {
    setShowModal(prev => !prev);
  }, []);

  return [showModal, onToggle];
};

export default useToggle;
