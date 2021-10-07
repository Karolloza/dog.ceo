import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import useIntersection from '../customHooks/useIntersection';

const S = {
  Card: styled.div`
    width: 200px;
    height: 200px;
    margin: 5px;
    position: relative;
    `,
  Img: styled.img`
  height: 100%; 
  width: 100%; 
  object-fit: cover;
`,
  DogBreed: styled.div`
    position: absolute;
    top: 0;
    font-size: 24px;
    font-weight: bold;
`,
};
const Card = ({
  dog, fetchDogMethod, onClick,
}) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState();
  const ref = useRef();
  const inViewport = useIntersection(ref, '100px');

  useEffect(async () => {
    if (inViewport) {
      const dogImage = await dispatch(fetchDogMethod(dog));
      setImage(dogImage);
    }
  }, [inViewport]);

  return (
    <>
      <S.Card onClick={onClick} ref={ref}>
        <S.Img
          src={image}
          alt={image}
        />
        <S.DogBreed>{dog}</S.DogBreed>
      </S.Card>
    </>
  );
};
Card.propTypes = {
  dog: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  fetchDogMethod: PropTypes.func.isRequired,
};

export default Card;
