import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

import { getBasicModal } from '../redux/selectors';
import { setCloseBasicModal } from '../redux/actions';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const S = {
  Img: styled.img`
  height: 100%; 
  width: 100%; 
  object-fit: cover;
`,
  ButtonsContainer: styled.div`
  display:flex;
  justify-content:space-around;
`,
};

const BasicModal = ({ fetchDogMethod }) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);

  const open = useSelector(getBasicModal);
  const handleCloseModal = () => {
    setImage(null);
    dispatch(setCloseBasicModal());
  };

  const handleFetchDog = async () => {
    const dogImage = await dispatch(fetchDogMethod);
    setImage(dogImage);
  };

  useEffect(async () => {
    if (open) {
      handleFetchDog();
    }
  }, [open]);
  return (
    <Modal
      open={open}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <S.Img src={image} alt="" />
        <S.ButtonsContainer>
          <Button variant="contained" onClick={handleCloseModal}>Close</Button>
          <Button variant="contained" onClick={handleFetchDog}>Next Image</Button>
        </S.ButtonsContainer>
      </Box>
    </Modal>

  );
};
BasicModal.propTypes = {
  fetchDogMethod: PropTypes.func.isRequired,
};

export default BasicModal;
