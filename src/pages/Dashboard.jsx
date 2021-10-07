import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';
import { fetchDogs, fetchDogBreedImage } from '../redux/api';
import { getDogsArray } from '../redux/selectors';
import { setOpenBasicModal } from '../redux/actions';
import Card from '../components/Card';
import BasicModal from '../components/BasicModal';

const S = {
  Dashboard: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `,
};
const Dashboard = () => {
  const dispatch = useDispatch();
  const [selectedDogBreed, setSelectedDogBreed] = useState(null);
  const dogs = useSelector(getDogsArray);

  const handleOpenModal = async (dog) => {
    await setSelectedDogBreed(dog);
    dispatch(setOpenBasicModal());
  };
  const displayDogs = () => (
    dogs.map((dog) => (
      <Card
        dog={dog}
        fetchDogMethod={fetchDogBreedImage}
        onClick={() => handleOpenModal(dog)}
        key={dog}
      />
    ))
  );

  useEffect(() => {
    dispatch(fetchDogs());
  }, []);
  return (
    <S.Dashboard>
      {displayDogs()}
      <BasicModal fetchDogMethod={fetchDogBreedImage(selectedDogBreed)} />
    </S.Dashboard>
  );
};

export default Dashboard;
